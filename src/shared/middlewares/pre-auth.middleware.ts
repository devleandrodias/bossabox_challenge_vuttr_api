import * as firebase from 'firebase-admin';
import { Request, Response } from 'express';
import { NestMiddleware } from '@nestjs/common';
import { firebaseParams } from 'src/configs/firebase/firebase.configs';

export class PreAuthMiddleware implements NestMiddleware {
  private readonly _defaultApp: any;

  constructor() {
    this._defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebaseParams),
    });
  }

  use(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization;

    if (token !== null && token !== '') {
      this._defaultApp
        .auth()
        .verifyIdToken(token.replace('Bearer ', ''))
        .then(async (decodedToken: any) => {
          const user = {
            email: decodedToken.email,
          };

          req['user'] = user;

          next();
        })
        .cath((error: any) => {
          console.log('ERRO');
          this.accessDenied(req.url, res);
        });
    } else {
      next();
    }
  }

  private accessDenied(url: string, res: Response): void {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied',
    });
  }
}

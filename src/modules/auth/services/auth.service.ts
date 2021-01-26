import { Request } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public googleLogin(req: Request) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}

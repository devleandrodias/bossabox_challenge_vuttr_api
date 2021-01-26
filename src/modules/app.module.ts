import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { PreAuthMiddleware } from 'src/shared/middlewares/pre-auth.middleware';

import { AuthModule } from './auth/auth.module';
import { ToolModule } from './tool/tool.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, ToolModule],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(PreAuthMiddleware).forRoutes({
  //     path: '*',
  //     method: RequestMethod.ALL,
  //   });
  // }
}

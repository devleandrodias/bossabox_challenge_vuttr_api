import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ToolModule } from './tool/tool.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, ToolModule],
})
export class AppModule {}

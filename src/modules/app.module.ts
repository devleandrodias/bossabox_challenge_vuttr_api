import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { ToolModule } from './tool/tool.module';
import { UserModule } from './user/user.module';

import { typeOrmConfig } from 'src/configs/postgres/typeorm-configs';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ToolModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}

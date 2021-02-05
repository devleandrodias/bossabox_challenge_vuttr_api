import { Module } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { ToolModule } from './tool/tool.module';
import { UserModule } from './user/user.module';

import typeOrmConfigs from 'src/configs/postgres/typeorm-configs';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ToolModule,
    TypeOrmModule.forRoot(typeOrmConfigs as ConnectionOptions),
  ],
})
export class AppModule {}

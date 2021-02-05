import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { ToolModule } from './tool/tool.module';
import { UserModule } from './user/user.module';

import { configPostgresDatabase } from 'src/configs/typeorm/config-database';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ToolModule,
    TypeOrmModule.forRoot(configPostgresDatabase),
  ],
})
export class AppModule {}

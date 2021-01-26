import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [AuthController],
})
export class AuthModule {}

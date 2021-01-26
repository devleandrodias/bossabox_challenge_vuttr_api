import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('google')
@ApiTags('Authorization')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  public async googleAuth(@Req() req: Request) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  public googleAuthRedirect(@Req() req: Request) {
    return this._authService.googleLogin(req);
  }
}

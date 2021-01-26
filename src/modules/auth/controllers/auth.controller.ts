import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  @Get()
  public async getAll() {}
}

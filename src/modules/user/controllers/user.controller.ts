import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Get()
  public async getAll() {}
}

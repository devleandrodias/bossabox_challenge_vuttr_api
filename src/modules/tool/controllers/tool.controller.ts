import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Tools')
@Controller('tools')
export class ToolController {
  @Get()
  public async getAll() {
    return [];
  }
}

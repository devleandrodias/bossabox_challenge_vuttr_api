import { Controller, Get } from '@nestjs/common';

@Controller('tools')
export class ToolController {
  @Get()
  public async getAll() {
    return [];
  }
}

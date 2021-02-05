import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { ToolService } from '../services/implementations/tool.service';

@ApiTags('Tools')
@Controller('tools')
export class ToolController {
  constructor(private readonly _toolService: ToolService) {}

  @Get()
  public async getAll() {
    return this._toolService.getAllTools();
  }
}

import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { Tool } from '../entities/tool.entity';
import { ToolService } from '../services/implementations/tool.service';

@ApiTags('Tools')
@Controller('tools')
export class ToolController {
  constructor(private readonly _toolService: ToolService) {}

  @Get()
  public async getAll(): Promise<Tool[]> {
    return this._toolService.getAllTools();
  }

  @Get(':id')
  public async getToolById(@Param('id') id: string): Promise<Tool> {
    return this._toolService.getToolById(id);
  }
}

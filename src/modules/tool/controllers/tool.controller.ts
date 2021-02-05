import { ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';

import { Tool } from '../entities/tool.entity';
import { CreateToolDto } from '../dtos/create-tool.dto';
import { UpadteToolDto } from '../dtos/update-tool.dto';
import { ToolService } from '../services/implementations/tool.service';

import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

@ApiTags('Tools')
@Controller('tools')
export class ToolController {
  constructor(private readonly _toolService: ToolService) {}

  @Get()
  async getAll(): Promise<Tool[]> {
    return this._toolService.getAllTools();
  }

  @Get(':id')
  async getToolById(@Param('id') id: string): Promise<Tool> {
    return this._toolService.getToolById(id);
  }

  @Post()
  async createTool(@Body() tool: CreateToolDto): Promise<Tool> {
    return this._toolService.createTool(tool);
  }

  @Put(':id')
  async updateTool(
    @Param('id') id: string,
    @Body() tool: UpadteToolDto,
  ): Promise<UpdateResult> {
    return this._toolService.updateTool(id, tool);
  }

  @Delete(':id')
  async removeTool(@Param('id') id: string): Promise<DeleteResult> {
    return this._toolService.removeTool(id);
  }
}

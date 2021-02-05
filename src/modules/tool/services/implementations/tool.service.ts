import { DeleteResult, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Tool } from '../../entities/tool.entity';
import { CreateToolDto } from '../../dtos/create-tool.dto';
import { UpadteToolDto } from '../../dtos/update-tool.dto';
import { ToolRepository } from '../../repositories/implementations/tool.repository';

@Injectable()
export class ToolService {
  constructor(private readonly _toolRepository: ToolRepository) {}

  async getAllTools(): Promise<Tool[]> {
    return this._toolRepository.getAllTools();
  }

  async getToolById(id: string): Promise<Tool> {
    return this._toolRepository.getToolById(id);
  }

  async createTool(tool: CreateToolDto): Promise<Tool> {
    return this._toolRepository.createTool(tool);
  }

  async updateTool(id: string, tool: UpadteToolDto): Promise<UpdateResult> {
    return this._toolRepository.updateTool(id, tool);
  }

  async removeTool(id: string): Promise<DeleteResult> {
    return this._toolRepository.removeTool(id);
  }
}

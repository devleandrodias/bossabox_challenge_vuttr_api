import { Injectable } from '@nestjs/common';

import { Tool } from '../../entities/tool.entity';
import { ToolRepository } from '../../repositories/implementations/tool.repository';

@Injectable()
export class ToolService {
  constructor(private readonly _toolRepository: ToolRepository) {}

  public async getAllTools(): Promise<Tool[]> {
    return this._toolRepository.getAllTools();
  }

  public async getToolById(id: string): Promise<Tool> {
    return this._toolRepository.getToolById(id);
  }
}

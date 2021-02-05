import {
  Repository,
  DeleteResult,
  UpdateResult,
  EntityRepository,
} from 'typeorm';

import { Tool } from '../../entities/tool.entity';
import { CreateToolDto } from '../../dtos/create-tool.dto';
import { UpadteToolDto } from '../../dtos/update-tool.dto';

@EntityRepository(Tool)
export class ToolRepository extends Repository<Tool> {
  async getAllTools(): Promise<Tool[]> {
    return this.find();
  }

  async getToolById(id: string): Promise<Tool> {
    return this.findOne({ where: { id } });
  }

  async createTool(tool: CreateToolDto): Promise<Tool> {
    return this.save(tool);
  }

  async updateTool(id: string, tool: UpadteToolDto): Promise<UpdateResult> {
    return this.update(id, tool);
  }

  async removeTool(id: string): Promise<DeleteResult> {
    return this.delete({ id });
  }
}

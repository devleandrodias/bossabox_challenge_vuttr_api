import { EntityRepository, Repository } from 'typeorm';

import { Tool } from '../../entities/tool.entity';

@EntityRepository(Tool)
export class ToolRepository extends Repository<Tool> {
  public async getAllTools(): Promise<Tool[]> {
    return this.find();
  }

  public async getToolById(id: string): Promise<Tool> {
    return this.findOne({ where: { id } });
  }
}

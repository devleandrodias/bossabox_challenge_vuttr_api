import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolController } from './controllers/tool.controller';
import { ToolRepository } from './repositories/implementations/tool.repository';
import { ToolService } from './services/implementations/tool.service';

@Module({
  providers: [ToolService],
  controllers: [ToolController],
  imports: [TypeOrmModule.forFeature([ToolRepository])],
})
export class ToolModule {}

import { Module } from '@nestjs/common';
import { ToolController } from './controllers/tool.controller';
import { ToolService } from './services/implementations/tool.service';

@Module({
  imports: [],
  providers: [ToolService],
  controllers: [ToolController],
})
export class ToolModule {}

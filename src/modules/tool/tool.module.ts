import { Module } from '@nestjs/common';
import { ToolController } from './controllers/tool.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [ToolController],
})
export class ToolModule {}

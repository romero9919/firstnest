import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { DatabaseModule } from 'src/database/database.module';
import { boardRepository } from 'src/repository/board.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [...boardRepository, BoardService],
})
export class BoardModule {}

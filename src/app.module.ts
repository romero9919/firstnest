import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';

@Module({
  imports: [BoardModule],
  controllers: [AppController, BoardController],
  providers: [AppService, BoardService],
})
export class AppModule {}

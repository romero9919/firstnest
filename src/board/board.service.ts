import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from 'src/dto/create-board.dto';
import { UpdateBoardDto } from 'src/dto/update-board.dto';
import { Board } from 'src/entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {

    constructor(
        @Inject('BOARD_REPOSITORY')
        private boardRepository: Repository<Board>,
    ) {}

    // create async
    async create(createBoardDto: CreateBoardDto): Promise<Board> {
        const { name } = createBoardDto;
        const board = await this.boardRepository.create({
            name
        });

        await this.boardRepository.save(board);
        return board;
    }

    // read async
    async AllBoards(): Promise<Board[]> {
        return this.boardRepository.find({});
    }
    
    // update async
    async update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
        const board = await this.boardRepository.findOne({
            where: {
                id,
            },
        });

        if(!board){
            throw new NotFoundException('Cannot found data.');
        }

        await this.boardRepository.update(id, updateBoardDto);
        const updatedBoard = await this.boardRepository.findOne({
            where: {
                id,
            },
        });

        return updatedBoard;

    }

    // delete async
    async delete(id: number){
        const result = await this.boardRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException('Cannot found data.');
        }
    }
}

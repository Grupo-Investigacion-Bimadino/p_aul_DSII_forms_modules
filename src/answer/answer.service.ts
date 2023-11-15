import { Injectable } from '@nestjs/common';

@Injectable()
export class AnswerService {
    private answers: any[] = [];

  findOne(id: number): string {
    return `Get Answer with id ${id}`;
  }

  findAll(): string {
    return 'Get all Answers';
  }

  create(createSongDto): string {
    this.answers.push(createSongDto);
    return 'Answer created successfully';
  }

  update(id, updateSong): string {
    return 'Answer updated successfully';
  }

  delete(id): string {
    return 'Answer deleted successfully';
  }
}

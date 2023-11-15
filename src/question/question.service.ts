import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionService {
    private questions: any[] = [];

    findOne(id: number): string {
      return `Get question with id ${id}`;
    }
  
    findAll(): string {
      return 'Get all questions';
    }
  
    create(createQuestionDto): string {
      this.questions.push(createQuestionDto);
      return 'Question created successfully';
    }
  
    update(id, updateQuestion): string {
      return 'Question updated successfully';
    }
  
    delete(id): string {
      return 'Question deleted successfully';
    }
}

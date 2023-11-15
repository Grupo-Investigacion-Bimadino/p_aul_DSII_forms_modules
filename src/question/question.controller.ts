import {  
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Patch, 
} from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
      return this.questionService.findOne(id);
    }
  
    @Get()
    findAll(): string {
      return this.questionService.findAll();
    }
  
    @Post()
    create(@Body() createQuestionDto): string {
      return this.questionService.create(createQuestionDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateQuestion): string {
      return this.questionService.update(id, updateQuestion);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return this.questionService.delete(id);
    }
}

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
 import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
    constructor(private readonly answerService: AnswerService) {}
  // find one by id findOne(id)
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.answerService.findOne(id);
  }

  @Get()
  findAll(): string {
    return this.answerService.findAll();
  }

  @Post()
  create(@Body() createAnswerDto): string {
    return this.answerService.create(createAnswerDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAnswer): string {
    return this.answerService.update(id, updateAnswer);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.answerService.delete(id);
  }
}

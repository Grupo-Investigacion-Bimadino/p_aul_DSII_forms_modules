import { 
    Controller,
    Get,
    Post,
    Body,
    Param,
   // Put,
    Delete,
    Patch, 
} from '@nestjs/common';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {}
  // find one by id findOne(id)
  @Get(':id')
  findOne(@Param('id') id: number): object {
    return this.formService.findOne(id);
  }

  @Get()
  findAll(): object {
    return this.formService.findAll();
  }

  @Post()
  create(@Body() createFormDto): object {
    return this.formService.create(createFormDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateForm): object {
    return this.formService.update(id, updateForm);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.formService.delete(id);
  }
}

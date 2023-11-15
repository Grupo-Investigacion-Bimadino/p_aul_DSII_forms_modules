import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './schemas/form.schema';


@Injectable()
export class FormService {
  constructor(@InjectModel('Form') private readonly formModel: Model<Form>) {}

  findOne(id: number): object {
    return this.formModel.findById(id).exec();
  }

  findAll(): object {
    return this.formModel.find().exec();
  }
  

  create(createFormDto): object {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  update(id, updateFormDto): object {
    return this.formModel.findByIdAndUpdate(id, updateFormDto, { new: true }).exec();
  }

  delete(id): string {
    return 'Form deleted successfully';
  }
}

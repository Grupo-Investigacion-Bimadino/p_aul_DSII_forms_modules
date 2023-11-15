import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

//You, el mes pasado | 1 author (You)
@Schema({

timestamps: true
})

export class question extends Document{

@Prop()
_id: object;

//@Prop()
//title: string;

//@Prop()
//body: string;
//You, hace 3 meses Test: Add tests for narratives
//@Prop({ type: mongoose.Schema. Types.ObjectId, ref: 'User'})
//created_by: string;

//@Prop({ type: String, enum: ['DRAFT', 'PUBLISHED', 'DELETED'], default: 'DRAFT' })
//status: string;

//@Prop()
//created_at: Date;

//@Prop()
//updated_at: Date;

//@Prop({ type: mongoose.Schema. Types.ObjectId, ref: 'Resource'})
//resources: string[];

//@Prop()
//keywords: string[];
}
export const questionSchema = SchemaFactory.createForClass(question);
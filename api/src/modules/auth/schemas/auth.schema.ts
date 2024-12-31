import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Auth extends Document {
  @Prop({
    type: String,
    required: true,
    default: 'user',
  })
  source: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    index: true,
  })
  sourceId: string;
}

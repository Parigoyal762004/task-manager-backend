import mongoose, { Document, Schema } from 'mongoose';

interface ITask extends Document {
  title: string;
  status: string;
  dueDate?: Date;
  description: string;
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  dueDate: { type: Date },
  description: { type: String, required: true },
});

export default mongoose.model<ITask>('Task', taskSchema);

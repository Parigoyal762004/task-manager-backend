// src/models/User.ts

import mongoose, { Document, Schema } from 'mongoose';

// Interface representing a User
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// User Schema
const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);

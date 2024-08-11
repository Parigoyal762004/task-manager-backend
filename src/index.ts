// src/index.ts

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import authRoutes from './routes/authRoutes'; // Import auth routes
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://goyalpari70:MqE5sfmfgI0jZc43@cluster0.49nro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });


  app.use(cors({
    origin: 'http://localhost:3000', // Adjust to your frontend origin
  }));
app.use(express.json());

// Use routes
app.use('/tasks', taskRoutes); // Ensure this path is correct
app.use('/auth', authRoutes); // Ensure this path is correct

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

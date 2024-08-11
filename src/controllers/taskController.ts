// src/controllers/taskController.ts

import { Request, Response } from 'express';
import Task from '../models/Task';

// Get all tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



// src/controllers/taskController.ts
export const createTask = async (req: Request, res: Response) => {
    try {
      console.log('Request body:', req.body); // Log incoming data
  
      const { title, status, dueDate, description } = req.body;
  
      if (!title || !status || !description) {
        return res.status(400).json({ error: 'Title, status, and description are required' });
      }
  
      const newTask = new Task({ title, status, dueDate, description });
      await newTask.save();
  
      res.status(201).json(newTask);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Failed to create task' });
    }
  };
  

// Update a task
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, status } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { title, status }, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

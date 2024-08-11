export interface Task {
  id: number;
  title: string;
  status: string;
  dueDate?: string; // Optional field
  assignedTo?: string; // Optional field
  description?: string; // Optional field
}

let tasks: Task[] = [
  { id: 1, title: 'Task 1', status: 'To Do', dueDate: '2024-08-20', assignedTo: 'Alice', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', status: 'In Progress', dueDate: '2024-08-22', assignedTo: 'Bob', description: 'Description for Task 2' },
  { id: 3, title: 'Task 3', status: 'Done', dueDate: '2024-08-24', assignedTo: 'Charlie', description: 'Description for Task 3' },
];

export const getTasks = () => tasks;

export const addTask = (task: Task) => {
  tasks.push(task);
};

export const updateTask = (id: number, updatedTask: Partial<Task>) => {
  tasks = tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task));
};

export const deleteTask = (id: number) => {
  tasks = tasks.filter(task => task.id !== id);
};

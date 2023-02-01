import { Task } from './task.model';

export interface Note {
  _id: string;
  title: string;
  content: string;
  color?: string;
  todoList: Array<Task>;
  createdAt: Date;
  updatedAt?: Date;
  attachment?: Blob;
  label?: string;
}

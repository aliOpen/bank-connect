export interface Note {
  _id: string;
  title: string;
  content: string;
  color?: string;
  todoList?: Array<string>;
  createdAt: Date;
  updatedAt?: Date;
  attachment?: Blob;
}

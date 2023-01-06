export interface Note {
  title?: string;
  content?: string;
  color?: string;
  todoList?: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
  attachment?: Blob;
}

export interface Todo {
  id: number | string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
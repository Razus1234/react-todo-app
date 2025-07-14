export interface Todo {
  id: number | string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class TodoModel implements Todo {
  id: number | string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(text: string, id?: number | string) {
    this.id = id ?? Date.now(); 
    this.text = text;
    this.completed = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toggleCompleted() {
    this.completed = !this.completed;
    this.updatedAt = new Date();
  }

  updateText(newText: string) {
    this.text = newText;
    this.updatedAt = new Date();
  }
}
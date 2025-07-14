import React from 'react';
import TodoItem from './TodoItem';
import type { Todo } from '../models/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: Todo['id']) => void;
  onDelete: (id: Todo['id']) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
import React from 'react';
import type { Todo } from '../models/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: Todo['id']) => void;
  onDelete: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        marginBottom: 8,
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 10 }}>
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
import { useState } from 'react';
import TodoList from './components/TodoList';
import type { Todo } from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;

    const now = new Date();
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    
    setTodos([newTodo, ...todos]);
    setInput('');
  };

  const toggleTodo = (id: string | number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string | number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <h2>📝 To-do List App</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button onClick={addTodo}>➕ Add</button>

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
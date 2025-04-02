import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Load from the local storage whenever the app loads
  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedToDos);
  }, []);

  // Update the local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To Do list built with React</h1>
      <TodoForm addTodo={addTodo} />
      <ToDoList 
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;

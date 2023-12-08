import React, { useState, useEffect } from 'react';
import AddTodo from '../AddTodo/Index';
import Todo from '../Todo/Index';
import { Section, Ul } from './styled.js';


export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <Section>
      <Ul>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </Ul>
      <AddTodo onAdd={handleAdd} />
    </Section>
  );
}

function readTodos(){
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : []; 
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

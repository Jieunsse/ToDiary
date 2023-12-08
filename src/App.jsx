import React from 'react';
import TodoList from './components/TodoApp/TodoList/Index';
import TodoHeader from './components/TodoApp/Header/Index';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];

export default function App() {

  const [ filter, setFilter ] = useState(filters[0]);

  return (
    <div>
      <TodoHeader filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </div>
  );
}


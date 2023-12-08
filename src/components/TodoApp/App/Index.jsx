import React from 'react';
import TodoList from '../TodoList/Index';
import TodoHeader from '../TodoHeader/Index';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];

const TodoApp = () => {
    const [ filter, setFilter ] = useState(filters[0]);

    return (
        <>
          <TodoHeader filters={filters} filter={filter} onFilterChange={setFilter}/>
          <TodoList filter={filter}/>
        </>
    );
};

export default TodoApp;
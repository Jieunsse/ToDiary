import React from 'react';
import TodoList from '../TodoList/Index';
import TodoHeader from '../TodoHeader/Index';
import { useState } from 'react';
import { Wrapper, Box } from './styled.js';
import './todoApp.css';

const filters = ['all', 'active', 'completed'];

const TodoApp = () => {
    const [ filter, setFilter ] = useState(filters[0]);

    return (
        <Wrapper>
          <Box>
            <TodoHeader filters={filters} filter={filter} onFilterChange={setFilter}/>
            <TodoList filter={filter}/>
          </Box>
        </Wrapper>
    );
};

export default TodoApp;
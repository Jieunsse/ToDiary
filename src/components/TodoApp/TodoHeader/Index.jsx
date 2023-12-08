import React from 'react';
import { Header, Ul, Li, Button } from './styled.js';

export default function TodoHeader({ filters, filter, onFilterChange }) {
  return (
    <Header>
      <Ul>
        {filters.map((value, index) => (
          <Li key={index}>
            <Button onClick={() => onFilterChange(value)}>{value}</Button>
          </Li>
        ))}
      </Ul>
    </Header>
  );
}

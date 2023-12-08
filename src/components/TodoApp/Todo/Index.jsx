import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Li, Input, Label, Span, Button } from './styled.js';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <Li>
      <Input
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <Label htmlFor={id}>{text}</Label>
      <Span>
        <Button onClick={handleDelete}>
          <FaTrashAlt />
        </Button>
      </Span>
    </Li>
  );
}

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button } from './styled.js';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <Button>Add</Button>
    </Form>
  );
}

import React from 'react';
import { Item } from './todos';
import TodoItem from './TodoItem';

const TodosList: React.FC<{ items: Item[] }> = ({ items }) => (
  <>
    {items.map(item => (
      <TodoItem key={item.id} item={item} />
    ))}
  </>
);

export default TodosList;

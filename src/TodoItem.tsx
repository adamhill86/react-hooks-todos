import React, { useContext } from 'react';
import { Item, Type } from './todos';
import styles from './TodoItem.module.scss';
import { Context } from './TodosApp';

const TodoItem: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useContext(Context);
  return (
    <div className={styles.todoWrapper}>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => dispatch({ type: Type.Complete, payload: item.id })}
      />
      <input
        type='text'
        defaultValue={item.text}
        onChange={e =>
          dispatch({ type: Type.UpdateText, payload: { id: item.id, text: e.target.value } })
        }
      />
      <button onClick={() => dispatch({ type: Type.Delete, payload: item.id })}>Delete</button>
    </div>
  );
};

export default TodoItem;

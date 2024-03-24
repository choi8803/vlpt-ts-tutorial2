import React from 'react';
import TodoInsert from '../components/TodoInsert';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';
import TodoList from '../components/TodoList';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  }

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  }

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  }

  return (
    <div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
    </div>
  );
}

export default TodoApp;
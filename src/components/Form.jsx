import React, { useState } from 'react';
import styles from '../styles/Main.module.css';

function Form() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };

    setTodo(prevTodos => [...prevTodos, newTodo]);
    setTitle('');
    setContent('');
  };

  const handleToggleTodo = id => {
    setTodo(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const workingTodos = todo.filter(todo => !todo.isDone);
  const doneTodos = todo.filter(todo => todo.isDone);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="제목" value={title} onChange={handleTitleChange} />
        <input type="text" placeholder="내용" value={content} onChange={handleContentChange} />
        <button className={styles.addButton} onClick={handleAddTodo}>
          추가하기
        </button>
      </div>
      <h2>Working 🔥</h2>
      {workingTodos.map(todo => (
        <div key={todo.id} className={styles.listContainer}>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <button onClick={() => handleToggleTodo(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
        </div>
      ))}
      <h2>Done ✅</h2>
      {doneTodos.map(todo => (
        <div key={todo.id} className={styles.listContainer}>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <button onClick={() => handleToggleTodo(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
        </div>
      ))}
    </div>
  );
}

export default Form;

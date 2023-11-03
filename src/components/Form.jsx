import React, { useState } from 'react';
import styles from '../styles/Main.module.css';

function TodoItem(props) {
  return props.todos.map(todo => (
    <div key={todo.id} className={styles.todoList}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button
        className={todo.isDone ? styles.todoCancelButton : styles.todoSuccessButton}
        onClick={() => props.handleClickToggleTodo(todo.id)}
      >
        {todo.isDone ? '취소' : '완료'}
      </button>
      <button className={styles.todoRemoveButton} onClick={() => props.handleClickRemoveTodo(todo.id)}>
        삭제
      </button>
    </div>
  ));
}

function Form() {
  const [todo, setTodo] = useState([]); // Todo 리스트 상태 관리
  const [title, setTitle] = useState(''); // 제목 입력 값 상태 관리
  const [content, setContent] = useState(''); // 내용 입력 값 상태 관리

  const workingTodos = todo.filter(todo => !todo.isDone);
  const doneTodos = todo.filter(todo => todo.isDone);

  // TODO 추가
  const handleClickAddTodo = () => {
    if (title.trim() === '' || content.trim() === '') return alert('제목과 내용을 입력해 주세요.');
    const newTodo = {
      id: Date.now(), // 고유 값
      title: title,
      content: content,
      isDone: false,
    };

    // 이전 상태의 todo 배열을 prevTodos로 받고 스프레드로 배열을 찢은 다음 새로 추가된 newTodo를 넣어준다.
    setTodo(prevTodos => [...prevTodos, newTodo]);
    setTitle('');
    setContent('');
  };

  const handleChangeInput = e => (e.target.name === 'title' ? setTitle(e.target.value) : setContent(e.target.value));
  const handleClickRemoveTodo = id => setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
  const handleClickToggleTodo = id =>
    setTodo(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));

  return (
    <div>
      <div className={styles.todoContent}>
        <input type="text" name="title" placeholder="제목" value={title} onChange={handleChangeInput} />
        <input type="text" name="content" placeholder="내용" value={content} onChange={handleChangeInput} />
        <button className={styles.addButton} onClick={handleClickAddTodo}>
          TODO 추가
        </button>
      </div>
      <h2>할 일 🔥</h2>
      <div className={styles.todoContainer}>
        <TodoItem
          todos={workingTodos}
          handleClickToggleTodo={handleClickToggleTodo}
          handleClickRemoveTodo={handleClickRemoveTodo}
        ></TodoItem>
      </div>
      <h2>완료 ✅</h2>
      <div className={styles.todoContainer}>
        <TodoItem
          todos={doneTodos}
          handleClickToggleTodo={handleClickToggleTodo}
          handleClickRemoveTodo={handleClickRemoveTodo}
        ></TodoItem>
      </div>
    </div>
  );
}

export default Form;

import React, { useState } from 'react';
import styles from '../styles/Main.module.css';

function Form() {
  const [todo, setTodo] = useState([]); // Todo 리스트 상태 관리
  const [title, setTitle] = useState(''); // 제목 입력 값 상태 관리
  const [content, setContent] = useState(''); // 내용 입력 값 상태 관리

  // 제목 입력 값 저장
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  // 내용 입력 값 저장
  const handleContentChange = e => {
    setContent(e.target.value);
  };

  /**
   * Todo 추가
   * id : 배열의 길이 (0부터 시작이라 +1 함)
   * title : input value
   * content : input value
   * isDone : 버튼 클릭 시 상태 값 확인 - default -> false
   */
  const handleAddTodo = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };

    // 기존 Todo에 새로 추가된 Todo를 배열에 추가
    // 이전 상태의 todo 배열을 prevTodos로 받고 스프레드로 배열을 찢은 다음 newTodo를 넣어준다.
    // 다시 리렌더링
    setTodo(prevTodos => [...prevTodos, newTodo]);
    setTitle('');
    setContent('');
  };

  const handleToggleTodo = id => {
    setTodo(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  // todo 배열에 담긴 애들
  const workingTodos = todo.filter(todo => !todo.isDone);
  const doneTodos = todo.filter(todo => todo.isDone);

  return (
    <div>
      <div
        style={{
          marginTop: '30px',
        }}
      >
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

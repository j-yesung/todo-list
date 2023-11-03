import React, { useState } from 'react';
import styles from '../styles/Main.module.css';

function Form() {
  const [todo, setTodo] = useState([]); // Todo 리스트 상태 관리
  const [title, setTitle] = useState(''); // 제목 입력 값 상태 관리
  const [content, setContent] = useState(''); // 내용 입력 값 상태 관리
  const workingTodos = todo.filter(todo => !todo.isDone);
  const doneTodos = todo.filter(todo => todo.isDone);

  /**
   * Todo 추가
   * id : 배열의 길이 (0부터 시작이라 +1 함)
   * title : 제목 입력 값
   * content : 내용 입력 값 저장
   * isDone : 버튼 클릭 시 상태 값 확인 - default -> false
   */
  const handleClickAddTodo = () => {
    if (title === '' && content === '') return alert('제목과 내용을 입력해 주세요.');
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };

    // 이전 상태의 todo 배열을 prevTodos로 받고 스프레드로 배열을 찢은 다음 새로 추가된 newTodo를 넣어준다.
    setTodo(prevTodos => [...prevTodos, newTodo]);
    setTitle('');
    setContent('');
  };

  const handleTitleChange = e => setTitle(e.target.value);
  const handleContentChange = e => setContent(e.target.value);
  const handleClickRemoveTodo = id => setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
  const handleClickToggleTodo = id => {
    setTodo(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  return (
    <div>
      <div
        style={{
          marginTop: '30px',
        }}
      >
        <input type="text" placeholder="제목" value={title} onChange={handleTitleChange} />
        <input type="text" placeholder="내용" value={content} onChange={handleContentChange} />
        {/* 인풋 박스 디자인 테스트 */}

        <button className={styles.addButton} onClick={handleClickAddTodo}>
          TODO 추가
        </button>
      </div>
      <h2>할 일 🔥</h2>
      <div className={styles.todoContainer}>
        {workingTodos.map(todo => (
          <div key={todo.id} className={styles.todoList}>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button className={styles.todoSuccessButton} onClick={() => handleClickToggleTodo(todo.id)}>
              {todo.isDone ? '취소' : '완료'}
            </button>
            <button className={styles.todoRemoveButton} onClick={() => handleClickRemoveTodo(todo.id)}>
              삭제
            </button>
          </div>
        ))}
      </div>
      <h2>완료 ✅</h2>
      <div className={styles.todoContainer}>
        {doneTodos.map(todo => (
          <div key={todo.id} className={styles.todoList}>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button className={styles.todoCancelButton} onClick={() => handleClickToggleTodo(todo.id)}>
              {todo.isDone ? '취소' : '완료'}
            </button>
            <button className={styles.todoRemoveButton} onClick={() => handleClickRemoveTodo(todo.id)}>
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;

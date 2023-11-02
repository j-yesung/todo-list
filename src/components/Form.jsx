import React, { useState } from 'react';
import styles from '../styles/Main.module.css';

function Form() {
  // 리스트 상태 관리
  const [createList, setCreateList] = useState([]);
  const workTitle = document.querySelector('#work');
  console.log(workTitle);
  const generateHTML = () => {
    const newHTML = <p>This is dynamically generated HTML.</p>;

    setCreateList(prevHTML => [...prevHTML, newHTML]);
  };

  // const onSubmitHandler = e => {
  //   e.preventDefault();
  //   const workTitle = document.querySelector('#work');
  //   const titleValue = document.querySelector('.title').value;
  //   const contentValue = document.querySelector('.content').value;
  //   const contentText = `
  //     <div class=${listArea}>
  //       <div>
  //         ${titleValue}
  //       </div>
  //       <div>
  //         ${contentValue}
  //       </div>

  //     </div>
  //   `;

  //   workTitle.insertAdjacentHTML('afterbegin', contentText);
  // };

  return (
    <div className={styles.contentBox}>
      <form className={styles.inputArea}>
        <label className={styles.text}>제목 : </label>
        <input type="text" className="title" placeholder="제목을 입력해 주세요." />
        <label className={styles.text}>내용 : </label>
        <input type="text" className="content" placeholder="내용을 입력해 주세요." />
        <button type="button" className={styles.addButton} onClick={generateHTML}>
          추가하기
        </button>
      </form>
      {createList.map((html, index) => (
        <div key={index}>{html}</div>
      ))}
    </div>
  );
}

export default Form;

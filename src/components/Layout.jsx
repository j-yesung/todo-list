import React from 'react';
import styles from '../styles/Main.module.css';

function Layout(props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        My Todo List
        <div>React</div>
      </header>
      {props.children}

      <div className={styles.workTitle}>
        <h3>Woring</h3>
      </div>
      <div className={styles.listWork} id="work"></div>

      <div className={styles.doneTitle}>
        <h3>Done</h3>
      </div>
      <div className={styles.listDone} id="done"></div>
    </div>
  );
}

export default Layout;

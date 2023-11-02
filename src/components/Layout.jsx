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
    </div>
  );
}

export default Layout;

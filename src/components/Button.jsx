import React from 'react';
import styles from '../styles/Main.module.css';

function Button() {
  return (
    <button type="button" className={styles.addButton}>
      추가하기
    </button>
  );
}

export default Button;

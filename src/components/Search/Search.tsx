import React from 'react';
import styles from './Search.module.css';

function Search() {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input} type="text" />
    </div>
  );
}

export default Search;

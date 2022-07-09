import React from 'react';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from './SearchIcon.svg';

function Search() {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input} type="text" />
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
}

export default Search;

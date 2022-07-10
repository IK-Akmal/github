import { Dispatch, FormEvent, SetStateAction } from 'react';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from './SearchIcon.svg';

type SearchProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onSubmit: () => void
};

function Search({ value, setValue, onSubmit }: SearchProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputWrapper}>
      <input value={value} onChange={(event) => setValue(event.target.value)} className={styles.input} type="text" />
      <button type="submit" className={styles.btn}>
        <SearchIcon className={styles.searchIcon} />
      </button>
    </form>
  );
}

export default Search;

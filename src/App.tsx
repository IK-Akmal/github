import { useState } from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import styles from './App.module.css';
import { Repository } from './Model/Repository';
import Spinner from './components/Spinner/Spinner';
import CardList from './components/CardList/CardList';

function App() {
  const [value, setValue] = useState<string>('');

  const [data, setData] = useState<Repository>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getRepositories = () => {
    if (value.trim().length !== 0) {
      setLoading(true);
      setError('');
      axios.get(`https://api.github.com/search/repositories?q=${value}`)
        .then((response) => setData(response.data))
        .catch((err: Error) => setError(err.message))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>GitHub</h1>
        <Search value={value} setValue={setValue} onSubmit={getRepositories} />
      </header>
      <main className={styles.main}>
        {
          loading
            ? <Spinner />
            : (
              <>
                {
                  data?.items.length
                    ? <CardList errorMessage={error} items={data?.items} />
                    : <div className={styles.listEmpty}>Список пуст</div>
                }
              </>
            )
        }
      </main>
    </div>
  );
}

export default App;

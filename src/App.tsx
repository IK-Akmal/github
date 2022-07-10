import { useState } from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import styles from './App.module.css';
import { Repository } from './Model/Repository';
import Card from './components/Card/Card';
import Spinner from './components/Spinner/Spinner';

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
        .catch((err: Error) => setError(`Error: ${err.message}`))
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
            : error || data?.items.map((item) => (
              <Card key={item.id} {...item} />
            ))
        }

      </main>
    </div>
  );
}

export default App;

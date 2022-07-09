import Search from './components/Search/Search';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>GitHub</h1>
        <Search />
      </header>
    </div>
  );
}

export default App;

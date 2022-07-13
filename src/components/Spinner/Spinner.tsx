import styles from './Spinner.module.css';
import { SpinnerProps } from './Spinner.props';

function Spinner({ children, loading }: SpinnerProps): JSX.Element {
  if (loading) {
    return (
      <div className={styles.loader} />
    );
  }
  return (
    <>
      {children}
    </>
  );
}

export default Spinner;

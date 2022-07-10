import styles from './ErrorAlert.module.css';

type ErrorAlertProps = {
  message: string;
};

function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div className={styles.error}>{message}</div>
  );
}

export default ErrorAlert;

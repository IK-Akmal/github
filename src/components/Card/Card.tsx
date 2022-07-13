import { Item } from '../../Model/Item';
import styles from './Card.module.css';

function Card({
  name, html_url, owner, language, description,
}: Item) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={owner.avatar_url} alt="avatar" />
      <span className={styles.login}>{owner.login}</span>
      <a className={styles.link} href={html_url} target="_blank" rel="noreferrer">{name}</a>
      <span className={styles.description}>{description}</span>
      <span className={styles.language}>{language}</span>
    </div>
  );
}

export default Card;

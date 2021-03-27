import styles from './friendListItem.module.css';

const friends = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    {isOnline ? (
      <span className={styles.status}>{isOnline}</span>
    ) : (
      <span className={styles.statusOfLine}>{isOnline}</span>
    )}

    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default friends;

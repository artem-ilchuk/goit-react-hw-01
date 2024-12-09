import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={styles.friend}>
      <img src={avatar} alt={name} className={styles.img} />
      <p className={styles.name}>{name}</p>
      <p className={clsx(isOnline ? styles.green : styles.red)}>
        {isOnline ? `Online` : `Offline`}
      </p>
    </div>
  );
};

export default FriendListItem;

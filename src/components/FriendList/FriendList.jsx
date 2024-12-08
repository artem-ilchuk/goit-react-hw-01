import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendlistItem";
import userData from "../../userData.json";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friendlist}>
      <p className={styles.title}>Friends of {userData.username}</p>
      <ul className={styles.list}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={styles.item}>
              <FriendListItem
                name={friend.name}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
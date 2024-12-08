import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.usercard}>
      <div className={styles.profile}>
        <img
          className={styles.userimg}
          src={props.image}
          alt={props.name}
          width="120"
        />
        <p className={styles.username}>{props.name}</p>
        <p className={styles.userinfo}>@{props.tag}</p>
        <p className={styles.userinfo}>{props.location}</p>
      </div>

      <ul className={styles.userlist}>
        <li className={styles.useritem}>
          <span className={styles.subtitle}>Followers</span>
          <span className={styles.numbers}>{props.stats.followers}</span>
        </li>
        <li className={styles.useritem}>
          <span className={styles.subtitle}>Views</span>
          <span className={styles.numbers}>{props.stats.views}</span>
        </li>

        <li className={styles.useritem}>
          <span className={styles.subtitle}>Likes</span>
          <span className={styles.numbers}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

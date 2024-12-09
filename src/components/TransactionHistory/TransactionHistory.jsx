import styles from "./TransactionHistory.module.css";
import user from "/src/userData.json";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <h3 className={styles.title}>Transaction of {user.username}</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.content}>
          {items.map((item) => (
            <tr key={item.id} className={styles.item}>
              <td className={styles.type}>{item.type}</td>
              <td className={styles.calc}>{item.amount}</td>
              <td className={styles.calc}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

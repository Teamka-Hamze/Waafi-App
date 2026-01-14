import img from "../online/online.png";
import styles from "../online/style.module.css";

function Online() {
  return (
    <div className={styles.container}>
      <h1>Online Shopping</h1>
      <p>Select item from Faras - Payment from Waafi - Checkout</p>
      <img src={img} alt="" className={styles.img} />
    </div>
  );
}

export default Online;

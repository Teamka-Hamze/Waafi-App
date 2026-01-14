import styles from "../partTwo/style.module.css";
import img4 from "../partTwo/4.svg";
import img5 from "../partTwo/5.svg";
import img6 from "../partTwo/6.svg";

function Part() {
  return (
    <div className={styles.three}>
      <div className={styles.ser1}>
        <img src={img4} alt="" /> <br /> <br />
        <p>
          <b>Mobile Money</b>
        </p>{" "}
        <br /> <br />
        <p>
          WAAFI is your true Mobile Wallet, you <br /> can Send, Receive Money
          Instantly & <br /> Securely from our large network of <br /> our
          Agents
        </p>
      </div>
      <div className={styles.ser1}>
        <img src={img5} alt="" /> <br /> <br />
        <p>
          <b>Entertainment</b>
        </p>{" "}
        <br /> <br />
        <p>
          Watch unlimited Live Videos, Browse <br /> & Download Your Favorite
          Videos and <br /> Ringtones.
        </p>
      </div>
      <div className={styles.ser1}>
        <img src={img6} alt="" /> <br /> <br />
        <p>
          <b>Payments</b>
        </p>{" "}
        <br /> <br />
        <p>
          Make Instant Bill Payments for your <br /> shopping mobile app,
          utility and <br />
          bookings through WAAFI.
        </p>
      </div>
    </div>
  );
}

export default Part;

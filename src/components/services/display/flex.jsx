import styles from "../display/flex.module.css";
import img1 from "../display/1.svg";
import img2 from "../display/2.svg";
import img3 from "../display/3.svg";

function Flex() {
  return (
    <div className={styles.three}>
      <div className={styles.ser1}>
        <img src={img1} alt="" /> <br /> <br />
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
        <img src={img2} alt="" /> <br /> <br />
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
        <img src={img3} alt="" /> <br /> <br />
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

export default Flex;

import img1 from "../payments/1.svg";
import img2 from "../payments/2.svg";
import img3 from "../payments/3.svg";
import styles from "../payments/style.module.css";

function Payments() {
  return (
    <div>
      <div className={styles.heading}>
        <h1>Mobile payments</h1>
        <p>
          Make Instant Bill Payments for your shopping, utility and bookings
          through WAAFI.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.color}>
          <img src={img1} alt="" />
          <p>
            <b>NFC Payments</b>
          </p>{" "}
          <br />
          <p>
            Book your travels, hotels and <br /> flights from within WAAFI & get{" "}
            <br />
            Special discount from our Channel <br />
            Partners.
          </p>
        </div>
        <div className={styles.color}>
          <img src={img2} alt="" />
          <p>
            <b>Merchant Payments</b>
          </p>{" "}
          <br />
          <p>
            Connect with your loved ones <br /> effortlessly while enjoying the{" "}
            <br />
            most competitive rates available in the market.
          </p>
        </div>
        <div className={styles.color}>
          <img src={img3} alt="" />
          <p>
            <b>Bill Payments</b>
          </p>{" "}
          <br />
          <p>
            Shop through our online stores <br />
            and make instant payment though <br /> integrated payment features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payments;

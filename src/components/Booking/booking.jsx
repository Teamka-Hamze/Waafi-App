import booking from "../Booking/bookings.svg";
import styles from "../Booking/style.module.css";

function Booking() {
  return (
    <div className={styles.booking}>
      <h1>Booking / Reservations</h1>
      <p>
        Easily book and reserve with the Waafi App – your gateway to seamless
        planning.
      </p>
      <img src={booking} alt="" className={styles.img} />
    </div>
  );
}

export default Booking;

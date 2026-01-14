import image from "../image/card.svg";
import styles from "../image/style.module.css";
function Image() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className="">
          <b>
            Empowering you to <br /> express yourself <br /> according to your{" "}
            <br /> preferences.
          </b>
        </h1>{" "}
        <br /> <br />
        <p>
          WAAFI is your new life-style combining mobile money,
          <br /> communication, entertainment and productivity in a <br />{" "}
          unified app.
        </p>
      </div>
      <div>
        <img src={image} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default Image;

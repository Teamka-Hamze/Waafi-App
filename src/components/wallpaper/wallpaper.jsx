import img from "../wallpaper/1.svg";
import styles from "../wallpaper/style.module.css";

function Wallpaper() {
  return (
    <div className={styles.container}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1>
          Empowering you to <br /> express yourself <br /> according to your{" "}
          <br /> preferences.
        </h1>{" "}
        <br /> <br />
        <p>
          WAAFI is your new life-style combining mobile money, <br />{" "}
          communication, entertainment and productivity in a <br /> unified app.
        </p>
      </div>
    </div>
  );
}

export default Wallpaper;

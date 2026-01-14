import img from "../download/screen.webp";
import img1 from "../download/pl.png";
import styles from "../download/style.module.css";

function Down() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          WAAFI <br /> <span>DOWNLOAD</span>
        </h1>
        <p>
          WAAFI is your new life-style combining mobile money, communication,{" "}
          <br /> entertainment and productivity in a unified app.
        </p>
        <div>
          <img src={img1} alt="" className={styles.img} />
        </div>
      </div>
      <div>
        <img src={img} alt="" className={styles.img2} />
      </div>
    </div>
  );
}

export default Down;

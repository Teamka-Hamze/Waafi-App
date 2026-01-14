import styles from "../text/index.module.css";

function Text() {
  return (
    <div>
      <div className={styles.textSection}>
        <h1>
          Empowering you to express yourself <br /> according to your
          preferences.
        </h1>
        <p>
          WAAFI is your new life-style combining mobile money, communication,{" "}
          <br /> entertainment and productivity in a unified app.
        </p>
      </div>
    </div>
  );
}

export default Text;

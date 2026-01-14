import logoimage from "../header/logo.svg";
import styles from "../header/index.module.css";
function Header() {
  return (
    <dev className={styles.main}>
      <div className="logo">
        <img src={logoimage} alt="" className={styles.cursor} />
      </div>
      <div className={styles.menus}>
        <a href="#">Our Products</a>
        <a href="#">Features</a>
        <a href="#">Helps</a>
        <a href="#">About Us</a>
        <a href="#">Our Team</a>
        <a href="#">Contact Us</a>
        <a href="#">Terms & Conditions </a>
      </div>
      <div className={styles.btn}>
        <button>
          <b>Download</b>
        </button>
      </div>
    </dev>
  );
}

export default Header;

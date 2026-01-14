import Image from "./image/img";
import styles from "../color/style.module.css";

function Coolor() {
  return (
    <div className={(styles.container, styles.content)}>
      <Image />
    </div>
  );
}

export default Coolor;

// import styles from "../hero-section/index.module.css";
import Text from "./docs/text";
import Images from "./image/image";
import styles from "./index.module.css";
function HeroSection() {
  return (
    <dev className={(styles.mian, styles.main)}>
      <Text />
      <Images />
    </dev>
  );
}

export default HeroSection;

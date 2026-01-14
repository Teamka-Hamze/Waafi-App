import styles from "../image/index.module.css";
import image1 from "../image/frame7.webp";
import image2 from "../image/frame10.svg";
import image3 from "../image/frame9.svg";
import image4 from "../image/voice.svg";
import image5 from "../image/frame8.svg";

function Images() {
  return (
    <div className={styles.allImages}>
      <div className={styles.imagesOne}>
        <div className={styles.one}>
          <img src={image1} alt="" className={styles.image1} />
        </div>
        <div className={styles.two}>
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="imagesTwo">
        <div className={styles.Oneim}>
          <img src={image3} alt="" />
        </div>
        <div className={styles.OneImag}>
          <img src={image4} alt="" />
        </div>
        <div className={styles.OneImage}>
          <img src={image5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Images;

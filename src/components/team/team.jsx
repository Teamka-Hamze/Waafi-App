import styles from "../team/style.module.css";
import img from "../team/chairman.webp";
import img1 from "../team/CEO.webp";
import img2 from "../team/CTO.webp";

function Team() {
  return (
    <div>
      <div className={styles.textSection}>
        <h1>Meet Our Team</h1>
        <p>
          We have a team of experienced professionals who are <br /> dedicated
          to making your experience with WAAFI as seamless <br /> as possible.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.center}>
            <img src={img} alt="" className={styles.images1} />
            <p>
              <b>Ali Abdallah Hettam</b>
            </p>
            <p>Chairman</p>
          </div>{" "}
          <br />
          <p>
            39+ years in logistics, sea transport, and <br /> business
            development. Fluent in English, <br /> French, and Arabic.
          </p>
        </div>
        <div className={styles.div}>
          <div className={styles.center}>
            <img src={img1} alt="" className={styles.images2} />
            <p>
              <b>Abdoulkadir Mohamed Djama</b>
            </p>
            <p>CEO</p>
          </div>{" "}
          <br />
          <p>
            Born in 1986, Master’s in Public <br /> Administration. CEO of WAAFI
            SAS, former <br /> Djibouti Health Rep in India. Banking <br />{" "}
            experience. Fluent in English and French.
          </p>
        </div>
        <div className={styles.div}>
          <div className={styles.center}>
            <img src={img2} alt="" className={styles.images} />
            <p>
              <b>Abdirizak Muse</b>
            </p>
            <p> CTO</p>
          </div>{" "}
          <br />
          <p>
            10+ years in mobile financial services. Led <br /> projects from
            architecture to execution. <br /> Expert in PCI DSS, PA DSS, and
            security <br /> threats.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

import styles from "../sectionOne/style.module.css";

function Abouttext() {
  return (
    <div>
      <div className={styles.header}>
        <h1>About Us</h1>
      </div>
      <div className={styles.flex}>
        <p className={styles.green}>
          <b>Our Company</b>
        </p>
        <p>
          <b>Corporate Governance</b>
        </p>
        <p>
          <b>Application Process</b>
        </p>
      </div>
      <div className={styles.text}>
        <h4>
          <b>Waafi SAS</b>
        </h4>
        <p>
          At Waafi SAS, we want you to make the most of your time, simplifying
          your daily needs with our groundbreaking All-In-One lifestyle e-wallet{" "}
          <br /> app. Waafi is a global lifestyle e-wallet app, created with the
          idea to be more than a regular mobile payment app, we designed it to{" "}
          <br /> become your daily companion, at the tip of your fingers with
          24/7 support and access to our services such as; Mobile Money, <br />{" "}
          Communication, Entertainment and Payments. Want to book a flight or
          pay your bills on the go? Making payments through the Waafi app is{" "}
          <br /> a few clicks away – as easy as one, two, three! We want you to
          be part of our growing community, join Waafi today.
        </p>{" "}
        <br />
        <h4>
          <b>Our Mission</b>
        </h4>
        <p>
          Our mission at Waafi is to provide everybody a secure and reliable
          cashless mobile payment platform with outstanding user experience{" "}
          <br /> that acts like a companion that simplifies your life.
        </p>{" "}
        <br />
        <h4>
          <b>Our Vision</b>
        </h4>
        <p>
          To become the consumer&qoute;s first choice as a service that can
          withstand their daily online payment needs – a true companion. To{" "}
          <br />
          make the Waafi brand a household name, synonymous with reliability,
          efficiency and security
        </p>{" "}
        <br />
        <h4>
          <b>Our Values</b>
        </h4>
        <p>
          From the very start, we shaped our organization around the same values
          and culture Waafi was founded on. We believe, creating an <br />{" "}
          environment for openness and cooperation for our employees within the
          company leads to more innovation and growth which in turn <br />{" "}
          produces a better service for our customers
        </p>
      </div>
    </div>
  );
}

export default Abouttext;

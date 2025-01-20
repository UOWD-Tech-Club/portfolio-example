import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.icons}>
        <div className={styles.github} />
        <div className={styles.facebook} />
        <div className={styles.instagram} />
        <div className={styles.linkedin} />
      </div>
      <span className={styles.copyright}>
        Copyright ©2025 Bob. All rights reserved.{" "}
      </span>
    </footer>
  );
}

export default Footer;

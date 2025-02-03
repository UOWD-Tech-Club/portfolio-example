/* eslint-disable react/jsx-no-target-blank */
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.icons}>
        <a
          className={styles.github}
          href="https://github.com/UOWD-Tech-Club"
          target="_blank"
        />
        <a
          className={styles.facebook}
          href="https://www.facebook.com/uowdubai/"
          target="_blank"
        />
        <a
          className={styles.instagram}
          href="https://www.instagram.com/uowd_tech_club/"
          target="_blank"
        />
        <a
          className={styles.linkedin}
          href="https://www.linkedin.com/company/uowd-tech-club/posts/?feedView=all"
          target="_blank"
        />
      </div>
      <span className={styles.copyright}>
        Copyright ©2025 Bob. All rights reserved.{" "}
      </span>
    </footer>
  );
}

export default Footer;

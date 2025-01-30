import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} />
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="#">Home</a>
        </li>
        <li className={styles.link}>
          <a href="#">Projects</a>
        </li>
        <button className={styles.ContactButton}>Contact Me</button>
      </ul>
    </div>
  );
}

export default Navbar;

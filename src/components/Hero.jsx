import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Bob</h1>
        <p className={styles.desc}>A Professional Software Engineer</p>
        <div className={styles.buttons}>
          <button className={styles.cvButton}>Donwload CV</button>
          <button className={styles.projectsButton}>My Projects</button>
        </div>
      </div>
      <div className={styles.heroGraphic}></div>
    </div>
  );
}

export default Hero;

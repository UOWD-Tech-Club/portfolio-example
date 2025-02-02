import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Bob</h1>
        <p className={styles.desc}>A Professional Software Engineer</p>
        <div className={styles.buttons}>
          <a
            href="https://www.corecruitment.com/downloads/CORE_CV_template_1.doc"
            download
          >
            <button className={styles.cvButton}>Download CV</button>
          </a>
          <button className={styles.projectsButton}>My Projects</button>
        </div>
      </div>
      <div className={styles.heroGraphic}></div>
    </div>
  );
}

export default Hero;

import styles from "./AboutMe.module.css";
import aboutMeImage from "../assets/aboutme_img.jpg";

function AboutMe() {
  return (
    <div className={styles.aboutme}>
      <img src={aboutMeImage} alt="About Me" />
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Bob, a professional software engineer with a knack for solving
          complex problems and delivering user-friendly solutions. With
          expertise in software architecture, AI integration, and automation, I
          thrive on creating efficient, scalable systems. Outside of work, I
          enjoy sharing knowledge with the tech community, exploring innovative
          ideas, and indulging in my hobbies like photography and gaming. I'm
          always looking for opportunities to collaborate and make a meaningful
          impact through technology!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

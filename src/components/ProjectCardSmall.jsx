import styles from "./ProjectCardSmall.module.css";

function ProjectCardSmall({ img, title, description }) {
  return (
    <div className={styles.contents} style={{ "--img": `url(${img})` }}>
      <div className={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
export default ProjectCardSmall;

import styles from "./MyProjects.module.css";
import ProjectCardSmall from "./ProjectCardSmall";

function MyProjects() {
  const sampleData = [
    {
      title: "Mobile Productivity App",
      cover_image:
        "https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A sleek and intuitive mobile app that organizes tasks and schedules seamlessly, designed with user-centric features and real-time syncing.",
    },
    {
      title: "AI-Powered Backend System",
      cover_image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A robust backend solution integrating AI for dynamic data processing, capable of scaling to support enterprise-level applications.",
    },
    {
      title: "Automated Robotics Controller",
      cover_image:
        "https://images.unsplash.com/photo-1728724654223-ae890fc31f1f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A control system for robotic arms that simplifies precision tasks, featuring adaptive algorithms for real-time adjustments.",
    },
  ];
  return (
    <section className={styles.contents}>
      <div className={styles.top}>
        <h1>My Projects</h1>
        <button>All Projects →</button>
      </div>
      <div className={styles.projects}>
        {sampleData.map((project, i) => (
          <ProjectCardSmall
            img={project.cover_image}
            title={project.title}
            description={project.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;

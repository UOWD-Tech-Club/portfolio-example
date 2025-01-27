import styles from './ProjectsPage.module.css';

function ProjectsPage() {
  const projects = [
    {
      title: "Mobile Productivity App",
      cover_image: "https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A sleek and intuitive mobile app that organizes tasks and schedules seamlessly, designed with user-centric features and real-time syncing. Built with React Native and Firebase, this app demonstrates modern mobile development practices and clean architecture.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      link: "#"
    },
    {
      title: "AI-Powered Backend System",
      cover_image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A robust backend solution integrating AI for dynamic data processing, capable of scaling to support enterprise-level applications. Features include real-time data processing, machine learning integration, and automated scaling.",
      technologies: ["Python", "TensorFlow", "AWS", "Docker"],
      link: "#"
    },
    {
      title: "Automated Robotics Controller",
      cover_image: "https://images.unsplash.com/photo-1728724654223-ae890fc31f1f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A control system for robotic arms that simplifies precision tasks, featuring adaptive algorithms for real-time adjustments. This project showcases advanced robotics control theory and practical implementation.",
      technologies: ["C++", "ROS", "Python", "OpenCV"],
      link: "#"
    },
    {
      title: "E-Commerce Platform",
      cover_image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A full-stack e-commerce solution with features like real-time inventory management, secure payment processing, and personalized user recommendations. Built with modern web technologies and following best practices for scalability and security.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      link: "#"
    },
    {
      title: "Smart Home Automation System",
      cover_image: "https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "An IoT-based home automation system that enables users to control and monitor their home devices remotely. Features include energy usage tracking, automated routines, and integration with popular smart home devices.",
      technologies: ["IoT", "Raspberry Pi", "MQTT", "React", "Node.js"],
      link: "#"
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img src={project.cover_image} alt={project.title} />
            </div>
            
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>
                <a href={project.link}>{project.title}</a>
              </h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologyList}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectsPage;

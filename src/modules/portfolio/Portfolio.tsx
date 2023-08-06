import ProjectCard from "../../components/project-card/ProjectCard";
import { Projects } from "../../data/Data";
import styles from "./styles.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.title}>Hotel Projects</h2>
      <div className={styles["hotel-container"]}>
        {Projects.filter(
          (project) => project.category === "hotel_projects"
        ).map((project) => (
          <ProjectCard key={project.project_id} project={project} />
        ))}
      </div>
      <h2 className={styles.title}>Office Projects</h2>
      <div className={styles["office-container"]}>
        {Projects.filter(
          (project) => project.category === "office_projects"
        ).map((project) => (
          <ProjectCard key={project.project_id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Portfolio;

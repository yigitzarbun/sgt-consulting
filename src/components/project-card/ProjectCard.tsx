import { Link } from "react-router-dom";
import { Project } from "../../data/Data";
import Paths from "../../routing/Paths";
import styles from "./styles.module.scss";

const ProjectCard = ({ project }: { project: Project }) => {
  const { cover_image, project_title, location, year, slug } = project;
  return (
    <div className={styles.card}>
      <Link to={`${Paths.PROJECT}${slug}`}>
        <img src={cover_image} alt="project-image" className={styles.image} />
        <h4 className={styles.title}>{project_title}</h4>
        <p className={styles.text}>{location}</p>
        <p className={styles.text}>{year}</p>
      </Link>
    </div>
  );
};
export default ProjectCard;

import { useParams } from "react-router-dom";
import { Projects } from "../../data/Data";
import ProjectCarousel from "../../components/project/project-carousel/ProjectCarousel";
import styles from "./styles.module.scss";

const Project = () => {
  const params = useParams();
  const project = Projects.find((project) => project.slug === params.slug);
  const images = [
    project?.cover_image,
    project?.image_1,
    project?.image_2,
    project?.image_3,
  ].filter(Boolean) as string[];

  return (
    <div className={styles.project}>
      <h2 className={styles.title}>{project?.project_title}</h2>
      <p>{project?.location}</p>
      <p>{project?.year}</p>
      <ProjectCarousel images={images} />
      <p>{project?.project_description}</p>
    </div>
  );
};
export default Project;

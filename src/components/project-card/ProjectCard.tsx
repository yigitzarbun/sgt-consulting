import { Link } from "react-router-dom";
import { Project } from "../../data/Data";
import Paths from "../../routing/Paths";

const ProjectCard = ({ project }: { project: Project }) => {
  const { cover_image, project_title, location, year, slug } = project;
  return (
    <Link to={`${Paths.PROJECT}/${slug}`}>
      <img src={cover_image} alt="project-image" />
      <h4>{project_title}</h4>
      <p>{location}</p>
      <p>{year}</p>
    </Link>
  );
};
export default ProjectCard;

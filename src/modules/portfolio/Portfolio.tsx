import ProjectCard from "../../components/project-card/ProjectCard";
import { Projects } from "../../data/Data";

const Portfolio = () => {
  return (
    <div>
      <div>
        <h2>Hotel Projects</h2>
        <div>
          {Projects.filter(
            (project) => project.category === "hotel_projects"
          ).map((project) => (
            <ProjectCard key={project.project_id} project={project} />
          ))}
        </div>
      </div>
      <div>
        <h2>Office Projects</h2>
        <div></div>
      </div>
    </div>
  );
};
export default Portfolio;

import { useTranslation } from "react-i18next";
import CardProject from "./CardProject";
import { Projects } from "../types";

type ProjectsProps = {
  projects: Projects[];
};
export default function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation();
  return (
    <div className="container_projects">
      <div>
        <h1 className="title_skills" id='link'>{t("projects.title")}</h1>
      </div>

      <div className="container text-center row row-cols-1 row-cols-sm-2 row-cols-md-2 w-100 m-auto">
        {projects.map((project) => (
          <div className="col " key={project.id}>
            <CardProject
               project={project}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

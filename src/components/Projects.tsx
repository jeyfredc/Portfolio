import { useTranslation } from "react-i18next";
import CardProject from "./CardProject";
import type { Projects } from "../types";
import { usePortfolio } from "../hooks/usePortfolio";


export default function Projects() {
  const { t } = useTranslation();

  const {projects} = usePortfolio()
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

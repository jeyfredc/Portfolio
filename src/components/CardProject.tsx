import { useTranslation } from "react-i18next";

type CardProjectProps = {
  project: {
    id: number;
    titleProject: string;
    descriptionProject: string;
    webProject: string;
    webRepo: string;
  };
}

export default function CardProject({project}:CardProjectProps) {
 
  const {t} = useTranslation()
  return (
    <div>
      <div className="card projects">
        <div>
          <h1>{project.titleProject}</h1>
          <img
            src={`./image_projects/${project.titleProject}.jpg`}
            alt="card_image"
            className="card_image"
          />
          <div>
            <p className="project_paragraph">
            {project.descriptionProject}
            </p>
            <p className="project_paragraph">{t('projects.info_link')} <a className="link_web" href={project.webProject}>link </a> </p>
            <p className="project_paragraph"><a className="link_repo" href={project.webRepo}>{t('projects.code_repo')} </a> </p> 
          </div>
        </div>
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import CardJob from "./CardJob";
import { usePortfolio } from "../hooks/usePortfolio";

export default function Experience() {
  const { t } = useTranslation();

  const { positionHelds } = usePortfolio();
  return (
    <div className="container_experiences" id="experience">
      <div>
        <h1 className="title_skills">{t("experiences.title")}</h1>
      </div>
      {positionHelds.map((position) => (
        <div className="card_experience" key={position.id}>
          <CardJob 
          position={position}
          />
        </div>
      ))}
    </div>
  );
}

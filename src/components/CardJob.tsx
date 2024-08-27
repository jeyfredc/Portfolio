import { useTranslation } from "react-i18next";
import { PositionHelds } from "../types";

type CardJobProps = {
  position: PositionHelds;
};

export default function CardJob({ position }: CardJobProps) {
  const { t } = useTranslation();
  return (
    <div className="container_experience">
      <div className="date_experience">
        <p>{position.durationEmployment}</p>
        <p>{position.company}</p>
      </div>
      <div className="infomation_experience">
        <h2>{position.position}</h2>
        <ul>
          {position.achievements.map((achievement) => (
            <li key={achievement.id}> {achievement.achievement} </li>
          ))}
        </ul>

        <h2>{t("experiences.knowledgeSkills")}</h2>
        <p className="skills_experience">{position.skills}</p>
      </div>
    </div>
  );
}

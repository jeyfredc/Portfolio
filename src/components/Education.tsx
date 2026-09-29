import { useTranslation } from "react-i18next";
import { usePortfolio } from "../hooks/usePortfolio";

export default function Education() {
  const { t } = useTranslation();

  const { certifications } = usePortfolio();
  return (
    <div className="container_experiences" id="education">
      <div>
        <h1 className="title_skills">{t("education.title")}</h1>
      </div>
      <div className="card_experience">
        <div className="container_education">
          <div className="date_experience">
            <p>{t("education.date")}</p>
          </div>
          <div className="infomation_experience">
            <h2>{t("education.degree")}</h2>
            <p>{t("education.institution")}</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="title_skills title_certifications">{t("certifications.title")}</h1>
      </div>
      <div className="card_experience">
        <ul className="list_certifications">
          {certifications.map((certification) => (
            <li key={certification.name}>
              <strong>{certification.name}</strong> — {certification.issuer}, {certification.year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

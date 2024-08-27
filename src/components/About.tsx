import { useTranslation } from "react-i18next";
import { usePortfolio } from "../hooks/usePortfolio";

export default function About() {
  const { aboutItems, calculateAge } = usePortfolio();
  const { t } = useTranslation();
  console.log(aboutItems[0].aboutMe);

  return (
    <div className="container_about">
      <div className="about_me">
        <h1 className="title_about">{aboutItems[0].aboutMe.title}</h1>

        <p> {aboutItems[0].aboutMe.description.one}</p>
        <p> {aboutItems[0].aboutMe.description.two}</p>
      </div>
      <div className="basic_information">
        <h1 className="title_about">
          {aboutItems[0].aboutMe.basicInformation.title}
        </h1>
        <div className="wrap_information">
          <div className="container_information">
            <div className="basic_information">
              {t("aboutMe.basicInformation.age")}:
            </div>
            <div className="information">{calculateAge()}</div>
          </div>
          <div className="container_information">
            <div className="basic_information">
              {t("aboutMe.basicInformation.email")}:{" "}
            </div>
            <div className="information">jeyfredc@gmail.com</div>{" "}
          </div>
          <div className="container_information">
            <div className="basic_information">
              {t("aboutMe.basicInformation.cellphone")}:{" "}
            </div>
            <div className="information">+57 315 718 5767</div>
          </div>
          <div className="container_information">
            <div className="basic_information">
              {t("aboutMe.basicInformation.languageTitle")}:{" "}
            </div>
            <div className="information" id='skills'>
              {t("aboutMe.basicInformation.language")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

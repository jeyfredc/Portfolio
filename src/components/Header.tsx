import { useTranslation } from "react-i18next";
import { usePortfolio } from "../hooks/usePortfolio";
import { useState } from "react";

export const HeaderMenu = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const {menuItems} = usePortfolio();
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "es" ? "en" : "es";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <div className="bg_header">

      <nav className="nav">
      <div className="container_button_translation">
        <button
          className="button_translation"
          type="button"
          onClick={handleChangeLanguage}
        >
          {currentLanguage === "en" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 420.16"
            >
              <path
                fillRule="nonzero"
                d="M74.32 0h363.36C478.55 0 512 33.46 512 74.32v271.53c0 40.81-33.5 74.31-74.32 74.31H74.32C33.44 420.16 0 386.69 0 345.85V74.32C0 33.41 33.41 0 74.32 0zm182.56 275.95l6.11-36.05c13.4 3.35 25.45 5.02 36.16 5.02 10.7 0 19.33-.43 25.89-1.3v-10.93l-19.67-1.74c-17.77-1.61-29.96-5.87-36.59-12.78-6.62-6.92-9.94-17.15-9.94-30.7 0-18.64 4.04-31.46 12.12-38.45 8.09-6.98 21.81-10.48 41.18-10.48s36.85 1.82 52.44 5.46l-5.47 34.96c-13.54-2.19-24.39-3.29-32.54-3.29-8.16 0-15.08.37-20.76 1.1v10.7l15.73 1.53c19.08 1.9 32.26 6.45 39.54 13.65 7.28 7.21 10.92 17.23 10.92 30.04 0 9.18-1.23 16.93-3.71 23.27-2.48 6.33-5.42 11.14-8.85 14.42-3.42 3.28-8.27 5.79-14.53 7.53-6.26 1.75-11.76 2.81-16.49 3.17-4.73.37-11.03.55-18.9.55-18.93 0-36.48-1.9-52.64-5.68zm-29.49-49.16H183.7v16.61h53.52v34.95h-97.21V141.81h96.11l-5.46 34.96H183.7v18.35h43.69v31.67zM437.68 35.93H74.32c-21.08 0-38.39 17.31-38.39 38.39v271.53c0 21.1 17.25 38.39 38.39 38.39h363.36c21.16 0 38.39-17.24 38.39-38.39V74.32c0-21.09-17.29-38.39-38.39-38.39z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 420.16"
            >
              <path
                fillRule="nonzero"
                d="M74.32 0h363.36C478.55 0 512 33.46 512 74.32v271.53c0 40.81-33.5 74.31-74.32 74.31H74.32C33.44 420.16 0 386.69 0 345.85V74.32C0 33.41 33.41 0 74.32 0zm148.91 226.79h-43.69v16.61h53.53v34.95h-97.22V141.81h96.12l-5.46 34.96h-46.97v18.35h43.69v31.67zm111.85 51.56c-3.99-5.79-36.19-58.98-36.48-58.98v58.98h-43.69V141.81h41.06c3.94 5.72 35.42 58.99 36.49 58.99v-58.99h43.69v136.54h-41.07zm102.6-242.42H74.32c-21.08 0-38.39 17.31-38.39 38.39v271.53c0 21.1 17.25 38.39 38.39 38.39h363.36c21.16 0 38.39-17.24 38.39-38.39V74.32c0-21.09-17.29-38.39-38.39-38.39z"
              />
            </svg>
          )}
        </button>
      </div>
        {menuItems.map((item) => (
          <a key={item.id} href={`#${item.route}`} className="link_route">{item.name}</a>
        ))}
      </nav>
      <header className="container_profile">
 
          <div className="profile">

          <img
            className="image_profile"
            src="./image_projects/photo.jpg"
            alt="perfil"
          />
          <h2 className="titleName">Jeyfred Calderon Cortes</h2>
          <h3 className="titleProfession">{t("profession")}</h3>

          <a className="resume" id='about'  target="_blank" href={currentLanguage=== "es" ? 'https://drive.google.com/file/d/1eTjvLjOtS85zKgj0k5qZmHW6pLfttAVo/view?usp=sharing': 'https://drive.google.com/file/d/1L75wsdJ61Aose6EJzjbUGG0aZBiFtyAv/view?usp=sharing'}  >{t('resume')}</a>
          </div>
    
      </header>
    </div>
  );
};

import { useTranslation } from "react-i18next";
import { Header } from "../types";

export const HeaderMenu = () => {
    const { t } = useTranslation();
  
    return [
      {
        id: 1,
        name: t('header.aboutMe')
      },
      {
        id: 2,
        name: t('header.skills')
      },
      {
        id: 3,
        name: t('header.projects')
      },
      {
        id: 4,
        name: t('header.experience')
      },
    ] as Header[];
  };
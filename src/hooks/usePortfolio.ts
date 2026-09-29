// headerMenu.ts
import { useTranslation } from "react-i18next";
import { About, Certification, Header, PositionHelds, Projects } from "../types";

export const usePortfolio = () => {
  const { t } = useTranslation();

  const calculateAge = () => {
    const birthDate = new Date('1994-04-10');
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }
    console.log(age);

    return age;
  }



  const menuItems: Header[] = [
    {
      id: 1,
      name: t('header.aboutMe'),
      route:'about'
    },
    {
      id: 2,
      name: t('header.skills')
      ,
      route:'skills'
    },
    {
      id: 3,
      name: t('header.projects'),
      route:'projects'
    },
    {
      id: 4,
      name: t('header.experience'),
      route:'experience'
    },
    {
      id: 5,
      name: t('header.education'),
      route:'education'
    },
  ];

  const aboutItems: About[] = [
    {
      id: 1,
      aboutMe: {
        title: t('aboutMe.title'),
        description: {
          one: t('aboutMe.description.one')
        },
        basicInformation: {
          title: t('aboutMe.basicInformation.title'),
          language: t('aboutMe.basicInformation.language')
        },
      }
    }
  ]


  const projects: Projects[] = [{
    id: 0,
    titleProject: 'Kiosk Food',
    descriptionProject: t('projects.kiosk_food'),
    webProject: 'https://quiosco-next-ten.vercel.app/admin/products',
    webRepo: 'https://github.com/jeyfredc/quiosco-next'
  },
    {
      id: 1,
      titleProject: 'Up Task',
      descriptionProject: t('projects.up_task'),
      webProject: 'https://uptask-frontend-rho.vercel.app/',
      webRepo: 'https://github.com/jeyfredc/uptask_frontend'
    },
    {
      id: 2,
      titleProject: 'cocktail App',
      descriptionProject: t('projects.cocktail_app'),
      webProject: 'https://66c4f255ee22f34687898183--nimble-faun-4f5e47.netlify.app/',
      webRepo: 'https://github.com/jeyfredc/coktail-app-react'
    }, {
      id: 3,
      titleProject: 'Cotizador de criptomonedas',
      descriptionProject: t('projects.cripto_app'),
      webProject: 'https://66bcd453e9da4ece50a600cb--zesty-nougat-14613c.netlify.app/',
      webRepo: 'https://github.com/jeyfredc/Cripto-App-React-Con-Zod?tab=readme-ov-file'
    }, {
      id: 4,
      titleProject: 'Pacientes App',
      descriptionProject: t('projects.pacients_app'),
      webProject: 'https://66ba338dfdff58c9623d477c--scintillating-muffin-9fce55.netlify.app/',
      webRepo: 'https://github.com/jeyfredc/pactientes-App-React'
    }, {
      id: 5,
      titleProject: 'Control gastos App',
      descriptionProject: t('projects.spend_app'),
      webProject: 'https://66b4f0f024cc3f3716ad2cea--keen-seahorse-a9f709.netlify.app/',
      webRepo: 'https://github.com/jeyfredc/control-gastos-react'
    }, {
      id: 6,
      titleProject: 'Gifts App',
      descriptionProject: t('projects.gift_app'),
      webProject: 'https://jeyfredc.github.io/GiftApp-Angular/',
      webRepo: 'https://github.com/jeyfredc/GiftApp-Angular?tab=readme-ov-file'
    }
  ]


  type Job = {
    company: string
    jobPosition: string
    durationEmployment: string
    progression?: string
    achievements: string[]
    skills: string
  }

  const jobs = t('experiences.jobs', { returnObjects: true }) as Job[]

  const positionHelds: PositionHelds[] = (Array.isArray(jobs) ? jobs : []).map((job, index) => ({
    id: index + 1,
    company: job.company,
    position: job.jobPosition,
    durationEmployment: job.durationEmployment,
    progression: job.progression,
    skills: job.skills,
    achievements: job.achievements.map((achievement, i) => ({ id: i + 1, achievement })),
  }))

  const certifications = t('certifications.items', { returnObjects: true }) as Certification[]

  return { menuItems, aboutItems, calculateAge, projects, positionHelds, certifications: Array.isArray(certifications) ? certifications : [] }
};

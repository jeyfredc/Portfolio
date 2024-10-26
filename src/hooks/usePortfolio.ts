// headerMenu.ts
import { useTranslation } from "react-i18next";
import { About, Header, PositionHelds, Projects } from "../types";

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
  ];

  const aboutItems: About[] = [
    {
      id: 1,
      aboutMe: {
        title: t('aboutMe.title'),
        description: {
          one: t('aboutMe.description.one'),
          two: t('aboutMe.description.two'),
          three: t('aboutMe.description.three')
        },
        basicInformation: {
          title: t('aboutMe.basicInformation.title'),
          language: t('aboutMe.basicInformation.language')
        },
      }
    }
  ]


  const projects: Projects[] = [
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


  const positionHelds: PositionHelds[] = [
    {
      id: 1,
      company: t('experiences.hdi.company'),
      position: t('experiences.hdi.jobPosition'),
      durationEmployment: t('experiences.hdi.durationEmployment'),
      achievements:[
        {
          id:1,
          achievement:t('experiences.hdi.achievements.one'),
        },
        {
          id:2,
          achievement:t('experiences.hdi.achievements.two'),
        },
        {
          id:3,
          achievement:t('experiences.hdi.achievements.three'),
        },
        {
          id:4,
          achievement:t('experiences.hdi.achievements.four'),
        },
        {
          id:5,
          achievement:t('experiences.hdi.achievements.five'),
        }
      ],
      skills: t('experiences.hdi.skills')
    },{
      id: 2,
      company: t('experiences.artemisa.company'),
      position: t('experiences.artemisa.jobPosition'),
      durationEmployment: t('experiences.artemisa.durationEmployment'),
      achievements:[
        {
          id:1,
          achievement:t('experiences.artemisa.achievements.one'),
        },
        {
          id:2,
          achievement:t('experiences.artemisa.achievements.two'),
        },
        {
          id:3,
          achievement:t('experiences.artemisa.achievements.three'),
        },
        {
          id:4,
          achievement:t('experiences.artemisa.achievements.four'),
        },

      ],
      skills: t('experiences.artemisa.skills')
    },{
      id: 3,
      company: t('experiences.grupoMok.company'),
      position: t('experiences.grupoMok.positions.0.jobPosition'),
      durationEmployment: t('experiences.grupoMok.positions.0.durationEmployment'),
      achievements:[
        {
          id:1,
          achievement:t('experiences.grupoMok.positions.0.achievements.one')
        },
        {
          id:2,
          achievement:t('experiences.grupoMok.positions.0.achievements.two'),
        },
        {
          id:3,
          achievement:t('experiences.grupoMok.positions.0.achievements.three'),
        },
      ],
      skills: t('experiences.grupoMok.skills')
    
    },
    {
      id: 4,
      company: t('experiences.grupoMok.company'),
      position: t('experiences.grupoMok.positions.1.jobPositionTwo'),
      durationEmployment: t('experiences.grupoMok.positions.1.durationEmploymentTwo'),
      achievements:[
        {
          id:1,
          achievement:t('experiences.grupoMok.positions.1.achievementsTwo.one'),
        },
        {
          id:2,
          achievement:t('experiences.grupoMok.positions.1.achievementsTwo.two'),
        }
      ],
      skills: t('experiences.grupoMok.skills')
    
    },
    {
      id: 5,
      company: t('experiences.grupoMok.company'),
      position: t('experiences.grupoMok.positions.2.jobPositionThree'),
      durationEmployment: t('experiences.grupoMok.positions.2.durationEmploymentThree'),
      achievements:[
        {
          id:1,
          achievement:t('experiences.grupoMok.positions.2.achievementsThree.one'),
        },
        {
          id:2,
          achievement:t('experiences.grupoMok.positions.2.achievementsThree.two'),
        }
      ],
      skills: t('experiences.grupoMok.skills')
    
    }
  ]

  return { menuItems, aboutItems, calculateAge, projects, positionHelds }
};

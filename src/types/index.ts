export type Header = {
    id:number
    name: string
    route:string
}


type DescriptionInformation = {
    one:string
    two:string
    three: string
}

type BasicInformation = {
    title: string
    language: string
}
  
  type AboutMe = {
    title: string;
    description: DescriptionInformation;
    basicInformation: BasicInformation;
  };
  
  // Definir el tipo para el array aboutItems
  export type About = {
    id:number
    aboutMe: AboutMe;
  };

export type Projects = {
  id:number
  titleProject:string
  descriptionProject:string
  webProject:string
  webRepo:string
}


export type Achievement = {
  id:number
  achievement: string;
}

export type PositionHelds = {
  id: number;
  achievements: Achievement[];
  company:string
  durationEmployment: string;
  position: string;
  skills:string
}

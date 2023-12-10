type Project = {
  name: string;
  link: string;
  cover: string;
  description: string;
  reach: string;
};

export const hultPrize: Project = {
  name: "Hult Prize",
  link: "https://hultprize.epn.edu.ec",
  cover: "/images/projects/hult-prize.png",
  description: "La competencia de emprendimiento social más grande del mundo",
  reach: "Emprendimiento social",
};

export const buhoni: Project = {
  name: "Buhoni",
  link: "",
  cover: "/images/projects/buhoni.jpeg",
  description: "Inteligencia Artificial para asistir a estudiantes de la universidad",
  reach: "Inteligencia Artificial",
};

export const eventsData: Project[] = [
  hultPrize,
  buhoni,
];

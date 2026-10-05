import type { GoalId, PersonalityId, StatKey } from "./types";

export const STAT_LABELS: Record<StatKey, string> = {
  money: "Dinero",
  career: "Carrera",
  health: "Salud",
  happiness: "Felicidad",
  relationships: "Relaciones",
  influence: "Influencia",
  reputation: "Reputación",
  luck: "Suerte",
};

export const STAT_SHORT: Record<StatKey, string> = {
  money: "DIN",
  career: "CAR",
  health: "SAL",
  happiness: "FEL",
  relationships: "REL",
  influence: "INF",
  reputation: "REP",
  luck: "SUE",
};

export const PERSONALITY_LABELS: Record<PersonalityId, string> = {
  ambicioso: "Ambicioso",
  prudente: "Prudente",
  rebelde: "Rebelde",
  sociable: "Sociable",
  inteligente: "Inteligente",
  creativo: "Creativo",
  competitivo: "Competitivo",
  tranquilo: "Tranquilo",
  arriesgado: "Arriesgado",
  disciplinado: "Disciplinado",
  carismatico: "Carismático",
  impulsivo: "Impulsivo",
};

export const GOAL_LABELS: Record<GoalId, string> = {
  rico: "Hacerme rico",
  carrera: "Tener una gran carrera",
  famoso: "Ser famoso",
  familia: "Tener una familia",
  mundo: "Cambiar el mundo",
  tranquilo: "Vivir tranquilo",
  libre: "Ser libre",
  idea: "No tengo idea",
};

export const GOAL_HINTS: Record<GoalId, string> = {
  rico: "El dinero pesará más en tus encrucijadas.",
  carrera: "El trabajo llamará a la puerta con más frecuencia.",
  famoso: "La mirada ajena se volverá un campo de juego.",
  familia: "Las personas cercanas ocuparán el centro.",
  mundo: "La influencia será más tentadora que el descanso.",
  tranquilo: "Evitarás algunas tormentas. No todas.",
  libre: "Rechazarás jaulas cómodas. A un precio.",
  idea: "El azar tendrá más permiso del habitual.",
};

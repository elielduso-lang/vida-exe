import type { GoalId, PersonalityId, StatEffects, Stats } from "./types";

export const GAME_VERSION = "V0.2.0";
export const SAVE_VERSION = 2;
export const SAVE_KEY = "vida.exe.save.v1";
export const START_AGE = 18;
export const END_AGE = 80;
export const MAX_PERSONALITIES = 3;

export const BASE_STATS: Stats = {
  money: 30,
  career: 20,
  health: 75,
  happiness: 60,
  relationships: 55,
  influence: 15,
  reputation: 40,
  luck: 50,
};

export const PERSONALITY_MODS: Record<PersonalityId, StatEffects> = {
  ambicioso: { career: 5, happiness: -2 },
  prudente: { health: 5, luck: -2 },
  rebelde: { influence: 4, reputation: -3 },
  sociable: { relationships: 5 },
  inteligente: { career: 3, influence: 2 },
  creativo: { happiness: 4, money: -2 },
  competitivo: { career: 4, relationships: -3 },
  tranquilo: { health: 3, happiness: 3, influence: -3 },
  arriesgado: { luck: 5, health: -2 },
  disciplinado: { career: 3, health: 3, happiness: -2 },
  carismatico: { reputation: 4, relationships: 3 },
  impulsivo: { luck: 3, money: -3, health: -2 },
};

export const GOAL_MODS: Record<GoalId, StatEffects> = {
  rico: { money: 4 },
  carrera: { career: 4 },
  famoso: { reputation: 4 },
  familia: { relationships: 4 },
  mundo: { influence: 4 },
  tranquilo: { happiness: 4, career: -2 },
  libre: { luck: 4, career: -2 },
  idea: { happiness: 2 },
};

export const SCORE_WEIGHTS: Stats = {
  money: 0.8,
  career: 0.9,
  health: 1.2,
  happiness: 1.4,
  relationships: 1.2,
  influence: 0.9,
  reputation: 0.9,
  luck: 0.3,
};

export function stageName(age: number): string {
  if (age <= 22) return "Formación";
  if (age <= 29) return "Primeros caminos";
  if (age <= 39) return "Consolidación";
  if (age <= 49) return "Máxima productividad";
  if (age <= 59) return "Transformación";
  if (age <= 69) return "Reinvención";
  return "Legado";
}

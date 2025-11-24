export interface Spirit {
  id: string;
  name: string;
  type: string;
  powerLevel: number;
  description: string;
  imageColor: string; // Hex color to generate a placeholder avatar
}

export enum Tab {
  HOME = 'HOME',
  SPIRITS = 'SPIRITS',
  ME = 'ME',
}

export enum Status {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
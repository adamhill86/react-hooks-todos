export enum Type {
  Add,
  Complete,
  Delete,
  Reset,
  UpdateText,
}

export interface Action {
  type: Type;
  payload?: any;
}

export type State = Item[];

export interface Item {
  id: number;
  text: string;
  completed: boolean;
}

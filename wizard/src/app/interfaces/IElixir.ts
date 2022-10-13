import { IIngredients } from '../interfaces/IIngredients';
import { IInventor } from '../interfaces/IInventor';

export interface IElixir {
  id: string;
  name: string;
  effect: string;
  sideEffects: string;
  characteristics: string;
  time: string;
  difficulty: string;
  ingredients: IIngredients[];
  inventors: IInventor[];
  manufacturer: string;
}

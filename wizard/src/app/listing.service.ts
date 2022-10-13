import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IElixir } from './interfaces/IElixir';
import { IIngredients } from '../app/interfaces/IIngredients';
import { ISpells } from '../app/interfaces/ISpells';
import { IWizards } from '../app/interfaces/IWizards';
import { IHouse } from './interfaces/IHouse';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  baseUrl = 'https://wizard-world-api.herokuapp.com';
  elixir: IElixir[] = [];
  spell?: ISpells[];
  ingredient?: IIngredients[];
  wizard?: IWizards[];
  house?: IHouse[];

  constructor(private httpClient: HttpClient) {}

  getElixir(): Observable<IElixir[]> {
    return this.httpClient.get<IElixir[]>(this.baseUrl + '/Elixirs');
  }
  getWizard(): Observable<IWizards[]> {
    return this.httpClient.get<IWizards[]>(`${this.baseUrl}/Wizards`);
  }
  getIngredients(): Observable<IIngredients[]> {
    return this.httpClient.get<IIngredients[]>(`${this.baseUrl}/Ingredients`);
  }
  getSpell(): Observable<ISpells[]> {
    return this.httpClient.get<ISpells[]>(`${this.baseUrl}/Spells`);
  }
  getHouse(): Observable<IHouse[]> {
    return this.httpClient.get<IHouse[]>(`${this.baseUrl}/houses`);
  }
}

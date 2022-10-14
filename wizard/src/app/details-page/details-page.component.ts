import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Head } from 'rxjs';
import { IElixir } from '../interfaces/IElixir';
import { Heads, IHouse, Trait } from '../interfaces/IHouse';
import { IIngredients } from '../interfaces/IIngredients';
import { IInventor } from '../interfaces/IInventor';
import { ISpells } from '../interfaces/ISpells';
import { Elixir, IWizards } from '../interfaces/IWizards';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private listing: ListingService) {}
  i!: number;
  elixir?: IElixir;
  spell?: ISpells;
  ingredient?: IIngredients;
  wizard?: IWizards;
  house?: IHouse;
  wizId: any;
  wElix?: Elixir[];
  ing?: IIngredients[];
  invent?: IInventor[];
  trait?: Trait[];
  head?: Heads[];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.wizId = params.get('id');
    });
    this.route.data.subscribe((item) => {
      if (item['item'] === 'elixir') {
        this.i = 1;
        this.elixir = this.listing.elixir?.filter(
          (elix) => elix.id == this.wizId
        )[0];
        this.ing = this.elixir.ingredients;
        this.invent = this.elixir.inventors;
      } else if (item['item'] === 'wizard') {
        this.i = 2;
        this.wizard = this.listing.wizard?.filter((w) => w.id == this.wizId)[0];
        this.wElix = this.wizard?.elixirs;
      } else if (item['item'] === 'ingredient') {
        this.i = 3;
        this.ingredient = this.listing.ingredient?.filter(
          (w) => w.id == this.wizId
        )[0];
      } else if (item['item'] === 'spell') {
        this.i = 4;
        this.spell = this.listing.spell?.filter((w) => w.id == this.wizId)[0];
      } else if (item['item'] === 'house') {
        this.i = 5;
        this.house = this.listing.house?.filter((w) => w.id == this.wizId)[0];
        this.trait = this.house?.traits;
        this.head = this.house?.heads;
      }
    });
  }
}

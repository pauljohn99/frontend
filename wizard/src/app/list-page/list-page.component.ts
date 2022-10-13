import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { IElixir } from '../interfaces/IElixir';
import { IIngredients } from '../interfaces//IIngredients';
import { ISpells } from '../interfaces//ISpells';
import { IWizards } from '../interfaces/IWizards';
import { IHouse } from '../interfaces/IHouse';
import { ParseTreeResult } from '@angular/compiler';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public listservice: ListingService,
    private _router: Router
  ) {}
  i?: number;
  ngOnInit(): void {
    this.route.data.subscribe((item) => {
      if (item['item'] === 'elixir') {
        this.listservice.getElixir().subscribe((list) => {
          this.listservice.elixir = list;
          console.log(this.listservice.elixir);
          this.i = 1;
        });
      } else if (item['item'] === 'spell') {
        this.listservice
          .getSpell()
          .subscribe((list) => (this.listservice.spell = list));
        this.i = 2;
      } else if (item['item'] === 'ingredients') {
        this.listservice
          .getIngredients()
          .subscribe((list) => (this.listservice.ingredient = list));
        this.i = 3;
      } else if (item['item'] === 'wizard') {
        this.listservice
          .getWizard()
          .subscribe((list) => (this.listservice.wizard = list));
        this.i = 4;
      } else if (item['item'] === 'house') {
        this.listservice
          .getHouse()
          .subscribe((list) => (this.listservice.house = list));
        this.i = 5;
      }
    });
  }
  clickSpell(spellId: string) {
    this._router.navigate(['/spell', spellId]);
  }
  clickElixir(elixirsId: string) {
    this._router.navigate(['/elixir', elixirsId]);
  }
  clickIngredient(ingredientId: number) {
    this._router.navigate(['/ingredient', ingredientId]);
  }
  clickWizard(wizardlId: string) {
    this._router.navigate(['/wizard', wizardlId]);
  }
  clickHouse(houseId: string) {
    this._router.navigate(['/house', houseId]);
  }
}

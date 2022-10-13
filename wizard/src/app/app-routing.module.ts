import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'elixir', component: ListPageComponent, data: { item: 'elixir' } },
  {
    path: 'ingredients',
    component: ListPageComponent,
    data: { item: 'ingredients' },
  },
  { path: 'wizard', component: ListPageComponent, data: { item: 'wizard' } },
  { path: 'spell', component: ListPageComponent, data: { item: 'spell' } },
  { path: 'house', component: ListPageComponent, data: { item: 'house' } },
  {
    path: 'elixir/:id',
    component: DetailsPageComponent,
    data: { item: 'elixir' },
  },
  {
    path: 'ingredient/:id',
    component: DetailsPageComponent,
    data: { item: 'ingredients' },
  },
  {
    path: 'wizard/:id',
    component: DetailsPageComponent,
    data: { item: 'wizard' },
  },
  {
    path: 'spell/:id',
    component: DetailsPageComponent,
    data: { item: 'spell' },
  },
  {
    path: 'house/:id',
    component: DetailsPageComponent,
    data: { item: 'house' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

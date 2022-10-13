import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomeComponent } from './home/home.component';
import { ListingService } from './listing.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailsPageComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ListingService],
  bootstrap: [AppComponent],
})
export class AppModule {}

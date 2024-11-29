import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeListComponent },
  { path: 'book/:id', component: HomeListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    RatingStarsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

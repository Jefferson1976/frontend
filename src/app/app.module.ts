import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListYearsComponent } from './components/dashboard/list-years/list-years.component';
import { ListTopsComponent } from './components/dashboard/list-tops/list-tops.component';
import { ViewMinimumComponent } from './components/dashboard/view-minimum/view-minimum.component';
import { ViewMaximumComponent } from './components/dashboard/view-maximum/view-maximum.component';
import { ListMoviesYearComponent } from './components/dashboard/list-movies-year/list-movies-year.component';
import { FormsModule } from '@angular/forms';
import { MoviesPaginateComponent } from './components/movies-list/movies-paginate/movies-paginate.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    DashboardComponent,
    MoviesListComponent,
    ListYearsComponent,
    ListTopsComponent,
    ViewMinimumComponent,
    ViewMaximumComponent,
    ListMoviesYearComponent,
    MoviesPaginateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

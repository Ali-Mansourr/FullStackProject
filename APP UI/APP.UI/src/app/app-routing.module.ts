import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { GenreRankingComponent } from './components/genre-ranking/genre-ranking.component';
import { AppRankingComponent } from './components/app-ranking/app-ranking.component';
import { AppDetailsComponent } from './components/app-details/app-details.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'genre-ranking', component: GenreRankingComponent},
  {path:'app-ranking', component: AppRankingComponent},
  {path:'app-details', component: AppDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

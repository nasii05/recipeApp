import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FoodPageComponent } from './partials/food-page/food-page.component';

const routes: Routes = [
{path:'', component:LandingPageComponent},
// {path:'home', component:LandingPageComponent},
{path:'food/:url', component:FoodPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

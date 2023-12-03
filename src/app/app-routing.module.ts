import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { RecipiesComponent } from './recipies/recipies.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      { path: 'home', component: WelcomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  {
    path: 'recipies', component: RecipiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

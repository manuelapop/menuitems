import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GiphyComponent } from './components/giphy/giphy.component';
import { JsonComponent } from './components/json/json.component';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'json', component: JsonComponent },
  { path: 'giphy', component: GiphyComponent },
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

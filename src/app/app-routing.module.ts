import { NewCarroComponent } from './pages/new-carro/new-carro.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NovoFormComponent } from './pages/novo-form/novo-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'sobre', component: SobreComponent},
  {path:'carros/new', component: NewCarroComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

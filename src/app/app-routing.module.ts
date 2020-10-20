import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomeComponent } from "./home/main-home/main-home.component";

const routes: Routes = [
  {path: '' , component: MainHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

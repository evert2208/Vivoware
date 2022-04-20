import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingComponent } from './setting/setting.component';
import { PeliculasComponent } from './peliculas/peliculas.component';



const routes: Routes = [
  {path: 'dashboard',
  component:PagesComponent,
  children: [
    {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
    {path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'}},
    {path: 'grafica1', component: GraficasComponent, data: {titulo: 'Graficas'}},
    {path: 'settings', component: SettingComponent, data: {titulo: 'Ajustes'}},


  ]
  },
  // {path: 'dashboard',
  // component: PagesComponent,
  // children: [

  //   {path: 'cartelera', component: PeliculasComponent, data: {titulo: 'cartelera'}},

  // ]

  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

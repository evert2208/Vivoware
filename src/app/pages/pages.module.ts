import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/share.module';
//import { AppRoutingModule } from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
//import { ComponentsModule } from '../components/components.module';
import { SettingComponent } from './setting/setting.component';
import { PeliculasComponent } from './peliculas/peliculas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PagesComponent,
    SettingComponent,
    PeliculasComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
    //ComponentsModule,

  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PagesComponent,
    SettingComponent,
    PeliculasComponent
  ]
})
export class PagesModule { }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]=[
    {
      titulo: 'Dashboard',
      icono: "mdi mdi-gauge",
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'Progreso', url: 'progress'},
        {titulo: 'Graficas', url: 'graficas'},
      ]
    },
    {
      titulo: 'Peliculas',
      icono: "mdi mdi-movie",
      submenu: [
        {titulo: 'Cartelera', url: 'cartelera'},
        {titulo: 'Edicion', url: 'edicion'}
      ]
    },
    {
      titulo: 'Multicines',
      icono: "mdi mdi-city",
      submenu: [
        {titulo: 'Disponibles', url: 'multicines'}
      ]
    },
    {
      titulo: 'Inventario',
      icono: "mdi mdi-book-open-page-variant",
      submenu: [
        {titulo: 'Consumo', url: 'consumo'},
        {titulo: 'Aseo', url: 'Aseo'}
      ]
    }
  ]
  constructor() { }
}

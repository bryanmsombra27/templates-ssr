import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'propiedades',
    loadComponent: () =>
      import('./pages/properties/properties').then((m) => m.Properties),
  },
  {
    path: 'propiedades/:id',
    loadComponent: () =>
      import('./pages/property-details/property-details').then(
        (m) => m.PropertyDetails
      ),
  },
];

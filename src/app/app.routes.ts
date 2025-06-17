import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'us',
    loadComponent: () =>
      import('./pages/us/us').then((m) => m.Us),
  },
];

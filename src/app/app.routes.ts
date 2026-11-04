import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil | Portfolio',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home),
  },
  {
    path: 'projets',
    title: 'Projets | Portfolio',
    loadComponent: () =>
      import('./features/projects/projects')
        .then(m => m.Projects),
  },
  {
    path: 'parcours',
    title: 'Parcours | Portfolio',
    loadComponent: () =>
      import('./features/journey/journey')
        .then(m => m.Journey),
  },
  {
    path: 'contact',
    title: 'Contact | Portfolio',
    loadComponent: () =>
      import('./features/contact/contact')
        .then(m => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
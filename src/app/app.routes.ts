import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
    title: 'Michèle Ariane — Product Owner · UX · Data',
  },
  {
    path: 'projets',
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
    title: 'Projets — Michèle Ariane',
  },
  {
    path: 'parcours',
    loadComponent: () => import('./features/journey/journey').then((m) => m.Journey),
    title: 'Parcours — Michèle Ariane',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    title: 'Contact — Michèle Ariane',
  },
  { path: '**', redirectTo: '' },
];

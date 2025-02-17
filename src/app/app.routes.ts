import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/league-table/league-table.component').then(m => m.LeagueTableComponent)
  },
];

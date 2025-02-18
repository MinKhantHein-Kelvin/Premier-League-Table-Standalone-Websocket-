import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/league-table/league-table.component').then(m => m.LeagueTableComponent)
  },
  {
    path: 'details/:id/:name/:color',
    loadComponent: () => import('./features/team-detail/team-detail.component').then(m => m.TeamDetailComponent)
  },
];

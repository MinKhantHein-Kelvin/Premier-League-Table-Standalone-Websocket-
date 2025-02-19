import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'table',
    loadComponent: () => import('./features/league-table/league-table.component').then(m => m.LeagueTableComponent)
  },
  {
    path: 'details/:id/:name/:color',
    loadComponent: () => import('./features/team-detail/team-detail.component').then(m => m.TeamDetailComponent)
  },
  {
    path: 'overview',
    loadComponent: () => import('./features/overview/overview.component').then(m => m.OverviewComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./features/news/news.component').then(m => m.NewsComponent)
  },
  {
    path: 'matches',
    loadComponent: () => import('./features/matches/matches.component').then(m => m.MatchesComponent)
  },
  {
    path: 'stats',
    loadComponent: () => import('./features/stats/stats.component').then(m => m.StatsComponent)
  },
  {
    path: 'squad',
    loadComponent: () => import('./features/squad/squad.component').then(m => m.SquadComponent)
  },
  { path: '**', redirectTo: '/table', pathMatch: 'full' },
];

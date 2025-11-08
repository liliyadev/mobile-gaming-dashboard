import { Routes } from '@angular/router';
import { GameDetailComponent } from './components/game-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage),
  },
  {
    path: 'games/:id',
    component: GameDetailComponent,
  }
];

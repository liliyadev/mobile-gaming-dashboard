import { Routes } from '@angular/router';
import { GamePreviewComponent } from './game-preview/game-preview.component';
import { GameDetailComponent } from './components/game-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
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
    path: 'games',
    component: GamePreviewComponent,
  },
  {
    path: 'games/:id',
    component: GameDetailComponent,
  }
];


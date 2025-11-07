import { Component } from '@angular/core';
import { TestPreviewComponent } from './test-preview/test-preview.component';
import { GamePreviewComponent } from './game-preview/game-preview.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    IonicModule,
    RouterModule,
    TestPreviewComponent,
    GamePreviewComponent,
  ],
  template: `
    <ion-app>
      <app-test-preview></app-test-preview>
      <app-game-preview></app-game-preview>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {}

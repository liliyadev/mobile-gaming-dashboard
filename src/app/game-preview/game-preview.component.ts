import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-game-preview',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    IonicModule,
  ],
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss'],
})
export class GamePreviewComponent implements OnInit {
  games: any[] = [];
  welcomeMessage: string = '';
  selectedGenre: string = '';
  genres: string[] = ['Arcade', 'Puzzle', 'Strategy', 'RPG'];

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getWelcomeMessage().subscribe(response => {
      this.welcomeMessage = response.message;
    });

    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  goToGameDetail(id: number): void {
    this.router.navigate(['/game', id]);
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/placeholder.png';
  }
}


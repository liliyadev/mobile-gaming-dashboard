import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss'],
})
export class GamePreviewComponent implements OnInit, AfterViewInit {
  @ViewChild('gameCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  welcomeMessage: string = '';
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getWelcomeMessage().subscribe(response => {
      this.welcomeMessage = response.message;
      console.log('Backend says:', response);
    });

    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'blue';
      ctx.fillRect(10, 10, 100, 100);
    }
  }
}

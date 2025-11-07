import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-preview',
  standalone: true, 
  imports: [CommonModule], 
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
    });

    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  ngAfterViewInit(): void {
    const canvasEl = this.canvas?.nativeElement;
    console.log('Canvas element:', canvasEl);

    const ctx = canvasEl?.getContext('2d');
    console.log('Canvas context:', ctx);

    if (ctx) {
      ctx.fillStyle = 'blue';
      ctx.fillRect(10, 10, 100, 100);
    } else {
      console.warn('Canvas context not available');
      console.log('Canvas element:', this.canvas?.nativeElement);

    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule, IonicModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  game: any;
  loading = true;

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(id).subscribe(data => {
        this.game = data;
        this.loading = false;
      });
    }
  }
}

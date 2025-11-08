import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter',
  standalone: true
})
export class GenreFilterPipe implements PipeTransform {
  transform(games: any[], genre: string): any[] {
    if (!genre) return games;
    return games.filter(game => game.genre.toLowerCase() === genre.toLowerCase());
  }
}

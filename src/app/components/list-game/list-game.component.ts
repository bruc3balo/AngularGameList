import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css']
})
export class ListGameComponent implements OnInit {

  games: Game[] = [];

  filters = {
    keyword: ''
  }

  constructor(private _gameservice: GameService) { }

  ngOnInit(): void {
     this.listGames()
  }



  listGames() {
    this._gameservice.getGames().subscribe(
      data => this.games = this.filterGames(data)
    )
  }


  filterGames(games: Game[]) {
   return games.filter((g) => {
     return g.name?.toLowerCase().includes(this.filters.keyword.toLowerCase())
   })
  }

}

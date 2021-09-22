import { GameService } from 'src/app/services/game.service';
import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})

export class AddGameComponent implements OnInit {

  game : Game = new Game();

  constructor(private _gameService: GameService, private _router: Router, private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
   const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');

      if(isIdPresent) {

      const id = this._activatedRoute.snapshot.paramMap.get('id');

      if(id != null) {
        let newId:number = +id;
        this._gameService.getAGame(id).subscribe(
          data => this.game = data
        )
      }

    }
  }

  saveNewGame () {
    this._gameService.saveGame(this.game).subscribe(
      data => {
        console.log("data",data);
        this._router.navigateByUrl("/games");
      }
    )
  }


  deleteGame(id: string) {
    this._gameService.deleteGame(id).subscribe(
      data => {
        console.log(
          'deleted response', data
        )
        this._router.navigateByUrl('/games');
      }
    )
  }

}

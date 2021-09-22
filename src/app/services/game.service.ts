import { Game } from './../models/game';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private baseUrl: string = "https://game-list-123.herokuapp.com"

  private getUrl: string = this.baseUrl+"/app/games";
  private getAUrl: string = this.baseUrl+"app/getGame";
  private getPostUrl: string = this.baseUrl+"app/addGame";
  private deleteUrl: string = this.baseUrl+"app/deleteGame";

  constructor(private _httpClient: HttpClient) {   }

  getGames(): Observable<Game[]> {
    console.log("Getting games")
    return this._httpClient.get<Game[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveGame(game: Game): Observable<Game>{
    return this._httpClient.post<Game>(this.getPostUrl,game);
  }


  getAGame(id: string):Observable<Game> {
    console.log("Game")
    return this._httpClient.get<Game>(`${this.getAUrl}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteGame (id: string):Observable<any> {
    console.log("Deleting game")
    return this._httpClient.delete(`${this.deleteUrl}/${id}`, {responseType: 'text'});
  }

}

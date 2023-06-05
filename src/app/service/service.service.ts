import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GameModel } from '../List/games/game.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //!!! ATENÇÃO : SEMPRE COLOCAR BARRA NA URL !!!

  private url: string = 'http://localhost:3000/games/';
  constructor(private http: HttpClient) {}

  listarGames(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  cadastrarGames(game: GameModel): Observable<any> {
    return this.http.post(`${this.url}`, game);
  }
  atualizarGames(id: any, game: GameModel): Observable<any> {
    return this.http.put(`${this.url}`.concat(id), game);
  }
  excluirGames(id: any) {
    return this.http.delete(`${this.url}`.concat(id));
  }
}

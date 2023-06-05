import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { GameModel } from './game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  game: GameModel = new GameModel();

  games: Array<any> = new Array();

  constructor(private gameService: ServiceService){}

  ngOnInit(): void {
    this.Listar();
      
  }

  Listar() {
    this.gameService.listarGames().subscribe(
      (g) => {
        this.games = g;
      },
      (err) => {
        console.log('Erro ao listar alunos', err);
      }
    );
  }
  Cadastrar() {
    console.log(this.game);
    this.gameService.cadastrarGames(this.game).subscribe(
      (g) => {
        this.game = new GameModel();
        this.Listar();
      },
      (err) => {
        console.log('Erro ao cadastrar alunos', err);
      }
    );
  }
  Atualizar(id: number) {
    console.log(this.game);
    this.gameService.atualizarGames(id, this.game).subscribe(
      (g) => {
        this.game = new GameModel();
        this.Listar();
      },
      (err) => {
        console.log('Erro ao cadastrar alunos', err);
      }
    );
  }
  Excluir(id: number) {
    console.log(this.game);
    this.gameService.excluirGames(id).subscribe(
      (g) => {
        this.game = new GameModel();
        this.Listar();
      },
      (err) => {
        console.log('Erro ao excluir alunos', err);
      }
    );
  }
}

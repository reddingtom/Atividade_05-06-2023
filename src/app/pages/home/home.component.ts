import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


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

}

import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  yearSearch: number | undefined;
  winnerSelect: number = -1;
  winnerSearch: any;

  winners: any[] = [];
  paginaAtual: number = 1;
  tamanhoPagina: number = 15;
  totalPaginas: number = 10;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getFilmes(this.paginaAtual-1, this.tamanhoPagina, this.winnerSearch, this.yearSearch).subscribe(r => {
      this.winners = r.content;
      this.totalPaginas = r.totalPages;
    })
  }

  paginar(dados: any) {
    this.paginaAtual = dados.paginaAtual;

    this.moviesService.getFilmes(this.paginaAtual-1, this.tamanhoPagina, this.winnerSearch, this.yearSearch).subscribe(r => {
      this.winners = r.content;
    })
  }

  pesquisar() {
    this.paginaAtual = 1;

    this.moviesService.getFilmes(this.paginaAtual-1, this.tamanhoPagina, this.winnerSearch, this.yearSearch).subscribe(r => {
      this.winners = r.content;
      this.totalPaginas = r.totalPages;
    })
  }

  setWinner() {
    this.winnerSearch = this.winnerSelect == -1 ? null : this.winnerSelect == 1;
    this.pesquisar();
  }
}

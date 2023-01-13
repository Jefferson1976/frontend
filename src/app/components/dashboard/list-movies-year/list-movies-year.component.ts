import { MoviesService } from 'src/app/services/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies-year',
  templateUrl: './list-movies-year.component.html',
  styleUrls: ['./list-movies-year.component.css']
})
export class ListMoviesYearComponent implements OnInit {

  yearSearch: number | undefined;

  winnersfiltered: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  pesquisar() {
    this.moviesService.listarFilmesPorAno(true, this.yearSearch).subscribe(r => {
      this.winnersfiltered = r;
    })
  }
}

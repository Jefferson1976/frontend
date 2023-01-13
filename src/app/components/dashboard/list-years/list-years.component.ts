import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-years',
  templateUrl: './list-years.component.html',
  styleUrls: ['./list-years.component.css']
})
export class ListYearsComponent implements OnInit {
  winnersByYear: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.listarAnosComVariosVencedores().subscribe(r => {
      this.winnersByYear = r.years;
    })
  }

}

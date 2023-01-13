import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-minimum',
  templateUrl: './view-minimum.component.html',
  styleUrls: ['./view-minimum.component.css']
})
export class ViewMinimumComponent implements OnInit {
  winnerMinumunInteval = { producer: null, interval: null, previousWin: null, followingWin: null, };

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.listarIntervalosPremios().subscribe(r => {
      this.winnerMinumunInteval = r.min[0];
    })
  }

}

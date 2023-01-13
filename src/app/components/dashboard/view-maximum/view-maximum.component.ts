import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-maximum',
  templateUrl: './view-maximum.component.html',
  styleUrls: ['./view-maximum.component.css']
})
export class ViewMaximumComponent implements OnInit {
  winnerMaximunInteval = { producer: null, interval: null, previousWin: null, followingWin: null, };

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.listarIntervalosPremios().subscribe(r => {
      this.winnerMaximunInteval = r.max[0];
    })
  }

}

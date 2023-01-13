import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tops',
  templateUrl: './list-tops.component.html',
  styleUrls: ['./list-tops.component.css']
})
export class ListTopsComponent implements OnInit {
  winnersTop3: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.listarEstudios().subscribe(r => {
      this.winnersTop3 = r.studios.slice(0,3);
    })
  }

}

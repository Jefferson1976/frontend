import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable, of } from 'rxjs';

const baseUrl = environment.back_movies;

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) {}

  getFilmes(page: number, size: number, winner: any, year: any): Observable<any> {
    var base = `${baseUrl}?page=${page}&size=${size}`

    if (winner != null) {
      base = `${base}&winner=${winner}`
    }

    if (year != null) {
      base = `${base}&year=${year}`
    }

    return this.http.get<any>(base);
  }

  listarAnosComVariosVencedores() : Observable<any> {
    return this.http.get<any>(`${baseUrl}?projection=years-with-multiple-winners`);
  }

  listarEstudios() : Observable<any> {
    return this.http.get<any>(`${baseUrl}?projection=studios-with-win-count`);
  }

  listarIntervalosPremios() : Observable<any> {
    return this.http.get<any>(`${baseUrl}?projection=max-min-win-interval-for-producers`);
  }

  listarFilmesPorAno(winner: boolean, year: any) : Observable<any> {
    return this.http.get<any>(`${baseUrl}?winner=${winner}&year=${year}`);
  }
}


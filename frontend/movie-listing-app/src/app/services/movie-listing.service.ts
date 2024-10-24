import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListingService {

  constructor(private _http: HttpClient) { }

  fetchMovieList() {
    return this._http.get(`${environment.apiRoot}/api/movie-list`);
  }
}

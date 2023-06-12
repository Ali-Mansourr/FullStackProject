import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreDataService {

  constructor(private http: HttpClient) { }

  getGenreData(){
    return this.http.get('https://localhost:7110/api/Genres');
  }
}

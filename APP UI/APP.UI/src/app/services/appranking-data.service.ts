import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApprankingDataService {

  constructor(private http: HttpClient) { }


  getappRankingData(genre:any){
    return this.http.get('https://localhost:7110/api/AppRanking/'+genre);
  }
}

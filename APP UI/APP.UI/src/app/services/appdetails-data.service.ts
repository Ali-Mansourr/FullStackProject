import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppdetailsDataService {

  constructor(private http: HttpClient) { }


  getappDetailsData(app:any){
    return this.http.get('https://localhost:7110/api/AppDetails/'+app);
  }
}

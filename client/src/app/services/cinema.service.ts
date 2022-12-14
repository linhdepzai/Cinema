import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  baseUrl = environment.baseUrl + 'cinema';

  constructor(private http: HttpClient) { }

  getAllCinema(payload?: any): Observable<any> {
    payload = payload ? '?name=' + payload : '';
    return this.http.get(this.baseUrl + '/getall' + payload);
  }
  searchCinema(payload?: any): Observable<any> {
    payload = payload ? '?name=' + payload : '';
    return this.http.post(this.baseUrl + '/search' ,payload);
  }
  getTheBestCinema(payload: any): Observable<any> {
    return this.http.get(this.baseUrl + '/getthebestcinema?bestOrWorst=' + payload);
  }
  getRevenueForCinema(): Observable<any>{
    return this.http.get(this.baseUrl + '/getrevenueforcinema');
  }
  createCinema(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', payload);
  }
  updateCinema(payload: any): Observable<any> {
    return this.http.put(this.baseUrl + '/update', payload);
  }
  deleteCinema(payload: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete', payload);
  }
}

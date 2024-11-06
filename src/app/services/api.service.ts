import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  weatherData(place: string): Observable<any> {
    return this.http.get(`https://api.weatherapi.com/v1/current.json?q=${place}`);
  }
}

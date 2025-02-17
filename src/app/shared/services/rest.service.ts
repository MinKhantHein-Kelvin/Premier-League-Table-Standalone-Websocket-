import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PremierLeagueData } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  getStandings(): Observable<PremierLeagueData> {
    // const headers = new HttpHeaders()
    //   .set('x-rapidapi-key', '3fdccb4947msh0a085081982e6e8p1d46e7jsnb7b92a2d4689')
    //   .set('x-rapidapi-host', 'football-highlights-api.p.rapidapi.com');

    return this.http.get<PremierLeagueData>('https://football-highlights-api.p.rapidapi.com/standings?leagueId=33973&season=2024');
  }
}

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
    return this.http.get<PremierLeagueData>('https://football-highlights-api.p.rapidapi.com/standings?leagueId=33973&season=2024');
  }
}

import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RestService } from '../../shared/services';
import { lastValueFrom } from 'rxjs';
import { PremierLeagueData, Standing } from '../../shared/models/league';
import {MatTableModule} from '@angular/material/table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-table',
  standalone: true,
  imports: [MatTableModule, NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent implements OnInit {
  isLoading : boolean = false;
  private _restService = inject(RestService);
  private _router = inject(Router);
  private cdr = inject(ChangeDetectorRef)
  displayedColumns: string[] = ['No','Team', 'MP', 'W', 'D', 'L', 'G', 'Pts'];
  dataSource : Standing[] = [];
  standingsData: PremierLeagueData = {
    league: { id: 0, logo: '', name: '', season: 0 },
    groups: [],
  };

  getTeamClass(teamName: string): string {
    const teamStyles: { [key: string]: string } = {
      'Arsenal': 'bg-red-700',
      'Aston Villa': 'bg-purple-600',
      'Bournemouth': 'bg-red-500',
      'Brentford': 'bg-black',
      'Brighton & Hove Albion': 'bg-blue-500',
      'Chelsea': 'bg-blue-700',
      'Crystal Palace': 'bg-blue-400',
      'Everton': 'bg-blue-800',
      'Fulham': 'bg-white',
      'Leeds United': 'bg-yellow-500',
      'Leicester City': 'bg-green-700',
      'Liverpool': 'bg-red-500',
      'Manchester City': 'bg-blue-500',
      'Manchester United': 'bg-red-600',
      'Newcastle United': 'bg-black',
      'Nottingham Forest': 'bg-green-600',
      'Southampton': 'bg-red-600',
      'Tottenham Hotspur': 'bg-white',
      'West Ham United': 'bg-brown-600',
      'Wolverhampton Wanderers': 'bg-orange-600'
    };

    return teamStyles[teamName] || 'bg-blue-700';
  }

  async ngOnInit(): Promise<void> {
    await this.getStandingsData();
  }

  getStandingsData = async () => {
    try {
      this.isLoading = true;
      const res : PremierLeagueData = await lastValueFrom(this._restService.getStandings());
      if(res){
        this.standingsData = {...this.standingsData, ...res};
        this.dataSource = this.standingsData.groups.flatMap(group => group.standings);
      }
    } catch (error) {

    }finally{
      this.isLoading = false;
      this.cdr.detectChanges()

    }
  }

  handleTeamDetail(teamDetail: Standing){
    const teamColor = this.getTeamClass(teamDetail.team.name);
    const teamName = teamDetail.team.name;
    this._router.navigate(['details/' + teamDetail.team.id + '/' + teamName + '/' + teamColor]);
  }
}

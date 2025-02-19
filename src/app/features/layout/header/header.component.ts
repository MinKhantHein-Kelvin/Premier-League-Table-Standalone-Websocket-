import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, Input, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../../shared/services';
import { HttpClientModule } from '@angular/common/http';
import { Client } from '../../../shared/utils/client';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OverviewComponent } from '../../overview/overview.component';
import { NewsComponent } from '../../news/news.component';
import { MatchesComponent } from '../../matches/matches.component';
import { SquadComponent } from '../../squad/squad.component';
import { LeagueTableComponent } from '../../league-table/league-table.component';
import { StatsComponent } from '../../stats/stats.component';

const headerTabState = {
  Overview : 'overview',
  Matches : 'matches',
  News : 'news',
  Squad : 'squad',
  Stats : 'stats',
  Table : 'table'
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule,NzSelectModule, CommonModule, FormsModule, NzButtonModule, OverviewComponent, NewsComponent, MatchesComponent, SquadComponent,LeagueTableComponent, StatsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChild('topDetector', { static: true }) topDetector!: ElementRef;
  protected tabState = headerTabState;
  @Input() teamColor : string = "";
  @Input() teamName : string = "";
  _restService = inject(RestService);
  _util : Client = new Client();
  seasonList : string[] = [];
  selectedSeason : string = "";
  routerName: any;
  private router = inject(Router);
  isSticky = false;
  currentStateIndex: number = 0;
  states: string[] = [headerTabState.Overview, headerTabState.Table, headerTabState.Matches, headerTabState.News, headerTabState.Squad, headerTabState.Stats];

  constructor(private location: Location) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY;
    this.isSticky = scrollY > this.topDetector.nativeElement.offsetHeight;
  }

  ngOnInit() {
    this.routerName = this.router.url;
    this.seasonList = this._util.getSeasons(6);
    if(this.seasonList.length > 0){
      this.selectedSeason = this.seasonList[0];
    }
  }

  handleBack = () => {
    this.location.back();
  }

  get currentState(): string {
    return this.states[this.currentStateIndex];
  }

  goToNextState(val : string): void {
    this.currentStateIndex = this.states.findIndex(state => val == state);
  }
}

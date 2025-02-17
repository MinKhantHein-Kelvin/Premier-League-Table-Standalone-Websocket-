import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-league-table',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent {
  getTeamClass(teamName: string): string {
    const teamStyles: { [key: string]: string } = {
      'Liverpool': 'bg-red-500',
      'Arsenal': 'bg-red-700',
      'Nottingham Forest': 'bg-green-600',
      'Manchester City': 'bg-blue-500'
    };

    return teamStyles[teamName] || 'bg-blue-700';
  }
}

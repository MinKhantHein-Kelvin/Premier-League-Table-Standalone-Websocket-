import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.scss'
})
export class TeamDetailComponent implements OnInit {
  teamColor : string = '';
  teamName : string = '';
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamColor = params['color'];
      this.teamName = params['name'];
    })
  }
}

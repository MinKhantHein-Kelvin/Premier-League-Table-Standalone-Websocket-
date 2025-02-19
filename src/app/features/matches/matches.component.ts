import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {

}

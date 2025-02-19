import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

}

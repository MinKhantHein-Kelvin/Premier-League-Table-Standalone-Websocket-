import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-squad',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.scss'
})
export class SquadComponent {

}

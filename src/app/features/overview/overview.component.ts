import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}

import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}

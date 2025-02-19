import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from './features/layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NzButtonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pllivescorewebsocket';
}

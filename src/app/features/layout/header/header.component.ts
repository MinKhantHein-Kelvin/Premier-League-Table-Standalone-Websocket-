import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { RestService } from '../../../shared/services';
import { HttpClientModule } from '@angular/common/http';
import { Client } from '../../../shared/utils/client';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule,NzSelectModule, CommonModule, FormsModule, NzButtonModule, NzTabsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() teamColor : string = "";
  _restService = inject(RestService);
  _util : Client = new Client();
  seasonList : string[] = [];
  selectedSeason : string = "";

  ngOnInit() {
    this.seasonList = this._util.getSeasons(6);
    if(this.seasonList.length > 0){
      this.selectedSeason = this.seasonList[0];
    }
  }
}

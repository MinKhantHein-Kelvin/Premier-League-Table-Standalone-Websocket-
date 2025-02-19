import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, Input, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../../shared/services';
import { HttpClientModule } from '@angular/common/http';
import { Client } from '../../../shared/utils/client';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule,NzSelectModule, CommonModule, FormsModule, NzButtonModule, NzTabsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChild('topDetector', { static: true }) topDetector!: ElementRef;
  @Input() teamColor : string = "";
  @Input() teamName : string = "";
  _restService = inject(RestService);
  _util : Client = new Client();
  seasonList : string[] = [];
  selectedSeason : string = "";
  routerName: any;
  private router = inject(Router);
  isSticky = false;

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

  openPage(routeUrl: string) {
    if (this.router.url != routeUrl) {
      this.router.navigate([routeUrl]);
    }
  }
}

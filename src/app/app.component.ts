import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from './services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menu = true;
  isMobile = false;

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit(): void {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      if (isMobile) {
        this.isMobile = true;
        this.menu = false;
      } else {
        this.isMobile = false;
        this.menu = true;
      }
    });
    this.onResize();
  }

  checkMenu() {
    if (this.isMobile) {
      this.menu = !this.menu;
    }
  }

  onResize() {
    this.responsiveService.checkWidth();
  }

  checkMode() {
    if (this.isMobile) {
      return 'over';
    } else {
      return 'side';
    }
  }

}

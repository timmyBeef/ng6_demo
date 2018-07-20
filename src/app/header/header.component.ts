import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    if ($event.altKey) {
      this.title = 'timmy test test';
    }
    this.counter++;
  }

  // 點fb+counter
  changeTitle2(altKey: boolean) {
    if (altKey) {
      this.title = 'timmy test test';
    }
  }

  getStyle() {
    return {'font-size': (12 + this.counter) + 'px'};
  }
}

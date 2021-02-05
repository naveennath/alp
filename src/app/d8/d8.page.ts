import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d8',
  templateUrl: './d8.page.html',
  styleUrls: ['./d8.page.scss'],
})
export class D8Page implements OnInit {

  constructor(private route: Router) {}
  slideOpts = {
    initialSlide: 1,
    speed: 4
  };
  navigate(path: string) {
    this.route.navigateByUrl('/' + path);
  }
  ngOnInit() {
  }

}

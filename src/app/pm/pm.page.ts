import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.page.html',
  styleUrls: ['./pm.page.scss'],
})
export class PmPage implements OnInit {

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

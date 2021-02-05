import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m8',
  templateUrl: './m8.page.html',
  styleUrls: ['./m8.page.scss'],
})
export class M8Page implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m32',
  templateUrl: './m32.page.html',
  styleUrls: ['./m32.page.scss'],
})
export class M32Page implements OnInit {

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

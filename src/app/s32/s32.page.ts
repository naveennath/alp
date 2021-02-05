import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s32',
  templateUrl: './s32.page.html',
  styleUrls: ['./s32.page.scss'],
})
export class S32Page implements OnInit {

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

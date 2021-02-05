import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s16',
  templateUrl: './s16.page.html',
  styleUrls: ['./s16.page.scss'],
})
export class S16Page implements OnInit {

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

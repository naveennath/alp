import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a32',
  templateUrl: './a32.page.html',
  styleUrls: ['./a32.page.scss'],
})
export class A32Page implements OnInit {

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

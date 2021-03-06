import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gtob',
  templateUrl: './gtob.page.html',
  styleUrls: ['./gtob.page.scss'],
})
export class GtobPage implements OnInit {

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

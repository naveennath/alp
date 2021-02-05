import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ptoup',
  templateUrl: './ptoup.page.html',
  styleUrls: ['./ptoup.page.scss'],
})
export class PtoupPage implements OnInit {

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

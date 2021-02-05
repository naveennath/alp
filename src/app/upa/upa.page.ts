import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upa',
  templateUrl: './upa.page.html',
  styleUrls: ['./upa.page.scss'],
})
export class UpaPage implements OnInit {

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

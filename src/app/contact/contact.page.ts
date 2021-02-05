import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  email: string;

  constructor(private route: Router) {}

  navigate(path: string) {
    this.route.navigateByUrl('/' + path);
  }
  ngOnInit() {
}
//   tmcse(): Promise<void> {

//     const email = {
//       to: 'tmcse@tce.edu',
//       bcc: [],
//       attachments: [ ],
//       subject: 'CLARIFICATION OF DOUBTS',
//       body: '',
//       isHtml: true
//     };
//     this.emailComposer.open(email);
//     return;
// }

// cscse(): Promise<void> {

//   const email = {
//     to: 'cscse@tce.edu',
//     bcc: [],
//     attachments: [ ],
//     subject: 'CLARIFICATION OF DOUBTS',
//     body: '',
//     isHtml: true
//   };
//   this.emailComposer.open(email);
//   return;
// }

// cskcse(): Promise<void> {

//   const email = {
//     to: 'cskcse@tce.edu',
//     bcc: [],
//     attachments: [ ],
//     subject: 'CLARIFICATION OF DOUBTS',
//     body: '',
//     isHtml: true
//   };
//   this.emailComposer.open(email);
//   return;
// }



}

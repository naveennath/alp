import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { File } from '@ionic-native/file/ngx';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {
  [x: string]: any;


  constructor(private route: Router, private document: DocumentViewer,
              // tslint:disable-next-line: deprecation
              private platform: Platform, private file: File, private ft: FileTransfer, private fileOpener: FileOpener) {}
  slideOpts = {
    initialSlide: 1,
    speed: 4
  };
  navigate(path: string) {
    this.route.navigateByUrl('/' + path);
  }
  open() {
    const filepath = this.file.applicationDirectory + 'www/assets';
    if
    (this.platform.is('android')) {
const fakeName = Date.now();
this.file.copyFile(filepath, 'ALP.pdf', this.file.dataDirectory, 'ALP.pdf').then(result => {
this.fileOpener.open(result.nativeURL, 'application/pdf');

});
    } else {
        const options: DocumentViewerOptions = {
      title: 'ALP'
    }; }
    this.document.viewDocument('${filepath}/ALP.pdf', 'application/pdf', {});
  }

  ngOnInit() {
  }

}

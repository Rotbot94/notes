import {Component, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  notesArr: any;

  constructor(private storage: StorageService) {
    this.getKeys();
  }

   ngOnInit() {
    this.notesArr.forEach(d => {
      console.log(d);
    });
  }

  async getKeys() {
    this.notesArr = this.storage.getKeyValuePairs();
  }

}

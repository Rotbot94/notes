import {Component, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  notesArr: any;

  constructor(private storage: StorageService,
              private router: Router) {
    this.getKeys();
  }

  getKeys() {
    this.notesArr = this.storage.getKeyValuePairs();
  }

  openNote(note) {
    const jsonNote = JSON.stringify(note);
    this.router.navigate(['/edit-note', { note: jsonNote}]);
  }

}

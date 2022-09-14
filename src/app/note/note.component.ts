import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  note = {
    title: '',
    content: ''
  };

  constructor(
    private storage: StorageService,
    private router: Router
    ) { }

  async saveNote() {
    if(!this.note) {
      console.log('no note');
      return;
    }
    if (this.note.title === '' || this.note.content === '') {
      console.log('Title or content is missing in the note');
      return;
    }
    await this.storage.set(this.note?.title, this.note?.content);
    this.router.navigate(['/tabs/tab2']);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {

  jsonNote: any;
  note: any;
  originalNote: any;

  constructor(private storage: StorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.jsonNote = this.route.snapshot.paramMap.get('note');
    this.note = JSON.parse(this.jsonNote);
    this.originalNote = structuredClone(this.note);
  }

  async edit() {
    console.log(this.note.title, this.originalNote.title);
    if(!this.note) {
      console.log('no note');
      return;
    }
    if (this.note.title === '' || this.note.content === '') {
      console.log('Title or content is missing in the note');
      return;
    }
    console.log(this.note.title, this.originalNote.title);
    if (this.note.title !== this.originalNote.title) {
      console.log(this.note.title, this.originalNote.title);
      this.storage.remove(this.originalNote.title);
    }
    await this.storage.set(this.note?.title, this.note?.content);
    this.router.navigate(['/tabs/tab2']).then(() => {
      window.location.reload();
    });
  }

}

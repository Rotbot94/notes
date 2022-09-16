import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

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
              private router: Router,
              private alertController: AlertController) { }

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

  async remove(key) {
    const dialogAnswer = await this.presentAlert();
    console.log(dialogAnswer);
    if (dialogAnswer === 'cancel') {
      return;
    }
    await this.storage.remove(key);
    this.router.navigate(['/tabs/tab2']).then(() => {
      window.location.reload();
    });
  }

  async presentAlert(): Promise<any> {
    let buttonClicked;
    const alert = await this.alertController.create({
      header: 'Are you sure that you want to delete this note?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: async () => buttonClicked = 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: async () => buttonClicked = 'delete',
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    return buttonClicked;
  }
}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import {EditNoteComponent} from './edit-note/edit-note.component';

const routes: Routes = [
  {
    path: 'note',
    component: NoteComponent
  },
  {
    path: 'edit-note',
    component: EditNoteComponent
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

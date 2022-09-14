import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NoteComponent} from './note/note.component';
import {TabsPageModule} from './tabs/tabs.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NoteComponent], imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, TabsPageModule, IonicStorageModule.forRoot(), FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

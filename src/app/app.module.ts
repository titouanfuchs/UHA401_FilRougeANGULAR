import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupCardComponent } from './group-card/group-card.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { GenreTagComponent } from './genre-tag/genre-tag.component';
import {GroupesService} from "./services/groupesService/groupes.service";
import {AlbumsService} from "./services/albumsService/albums.service";

@NgModule({
  declarations: [
    AppComponent,
    GroupCardComponent,
    AlbumCardComponent,
    GenreTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GroupesService, AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

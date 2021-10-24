import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupCardComponent } from './group-card/group-card.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { GenreTagComponent } from './genre-tag/genre-tag.component';
import { GroupesService } from "./services/groupesService/groupes.service";
import { AlbumsService } from "./services/albumsService/albums.service";
import { MainViewComponent } from './main-view/main-view.component';
import {RouterModule, Routes} from "@angular/router";
import { AdminViewComponent } from './admin-view/admin-view.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AlbumDetailsComponent } from './album-details/album-details.component';
import {DetailsService} from "./services/detailsService/details.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalInteractionComponent } from './basic-modal-interaction/basic-modal-interaction.component';
import {AdminModalManagerService} from "./services/adminModalManager/admin-modal-manager.service";
import { DbViewComponent } from './db-view/db-view.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { RemoveDetailsComponent } from './remove-details/remove-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { TrackComponent } from './track/track.component';
import {TrackService} from "./services/trackService/track.service";
import { TrackEditComponent } from './track-edit/track-edit.component';
import { TrackTagComponent } from './track-tag/track-tag.component';
import { TextBlockComponent } from './text-block/text-block.component';
import {MatTooltipModule} from "@angular/material/tooltip";

const appRoutes: Routes = [
  { path: 'main', component:MainViewComponent},
  { path: 'admin', component:AdminViewComponent},
  { path: '', component:MainViewComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    GroupCardComponent,
    AlbumCardComponent,
    GenreTagComponent,
    MainViewComponent,
    AdminViewComponent,
    AlbumDetailsComponent,
    BasicModalInteractionComponent,
    DbViewComponent,
    AddDetailsComponent,
    RemoveDetailsComponent,
    EditDetailsComponent,
    TrackComponent,
    TrackEditComponent,
    TrackTagComponent,
    TextBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    MatTooltipModule
  ],
  providers: [GroupesService, AlbumsService, AdminModalManagerService,DetailsService, TrackService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

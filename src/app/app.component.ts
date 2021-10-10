import {Component, OnInit} from '@angular/core';
import {GroupesService} from "./services/groupesService/groupes.service";
import {AlbumsService} from "./services/albumsService/albums.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angular-apiMusic';
  groupes: any[] = [];
  albums: any[] = [];

  constructor(private groupeService: GroupesService, private albumService:AlbumsService) {

  }

  ngOnInit() {
    this.groupes = this.groupeService.groupes;
    this.albums = this.albumService.albums;
  }
}

import { Component, OnInit } from '@angular/core';
import {GroupesService} from "../services/groupesService/groupes.service";
import {AlbumsService} from "../services/albumsService/albums.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  groupes: any[] = [];
  albums: any[] = [];

  constructor(private groupeService: GroupesService, private albumService:AlbumsService) {

  }

  ngOnInit(): void {
    this.groupes = this.groupeService.groupes;
    this.albums = this.albumService.albums;
  }

}

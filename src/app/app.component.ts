import {Component, OnInit} from '@angular/core';
import {GroupesService} from "./services/groupesService/groupes.service";
import {AlbumsService} from "./services/albumsService/albums.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angular-apiMusic';

  constructor(private groupeService: GroupesService, private albumService:AlbumsService) {

  }

  ngOnInit() {

  }
}

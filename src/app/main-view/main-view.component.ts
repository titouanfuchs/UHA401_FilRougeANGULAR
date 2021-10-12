import { Component, OnInit } from '@angular/core';
import { GroupesService } from "../services/groupesService/groupes.service";
import { AlbumsService } from "../services/albumsService/albums.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  groupes: any[] = [];
  albums: any[] = [];
  groupeSubscription: Subscription = new Subscription();
  albumSubscription: Subscription = new Subscription();

  constructor(private groupeService: GroupesService, private albumService:AlbumsService) {
    this.groupeService.searchGroupe("");
    this.albumService.searchAlbum("");
  }

  onGroupInput(event:any){
    this.groupeService.searchGroupe(event.target.value);
  }

  onAlbumInput(event:any){
    this.albumService.searchAlbum(event.target.value);
  }

  ngOnInit(): void {
    this.albumSubscription = this.albumService.albumSubject.subscribe(
      (al:any[]) => {
        this.albums = al;
      }
    )

    this.groupeSubscription = this.groupeService.groupeSubject.subscribe(
      (gr:any[]) => {
        this.groupes = gr;
      }
    )
  }
}

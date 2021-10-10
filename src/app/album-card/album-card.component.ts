import {Component, Input, OnInit} from '@angular/core';
import {AlbumsService} from "../services/albumsService/albums.service";

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() AlbumCover:string = "noCover.png";
  @Input() AlbumName:string = "Pas de nom";
  @Input() AlbumArtiste:string = "Pas d'artiste";
  @Input() AlbumSortie:number = 0;
  @Input() AlbumPiste:number = 0;

  constructor(private albumService:AlbumsService) { }

  ngOnInit(): void {
  }

}

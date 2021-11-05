import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit, OnChanges {

  @Input() correspondingAlbum: any = {"nom":"Album Sans nom", "couverture": "ahahahahahahaahahahhahahah"} ; //TODO : ????
  @Input() albumDescription: string = "Pas de description";
  @Input() albumLink: string = "https://www.last.fm/home";
  @Input() albumTracks: string = "";
  Tracks: string[] = [];

  constructor() { }

  openLink(link:string){
    window.open(link);
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.Tracks = JSON.parse(this.albumTracks);
  }

}

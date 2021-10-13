import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() correspondingAlbum: any = {"nom":"Album Sans nom", "couverture": "ahahahahahahaahahahhahahah"} ;
  @Input() albumTracks: any[] = [];
  @Input() albumLink: string = "https://www.last.fm/home";

  constructor() { }

  openLink(link:string){
    window.open(link);
  }

  ngOnInit(): void {
  }

}

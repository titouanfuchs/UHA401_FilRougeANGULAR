import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TrackService} from "../services/trackService/track.service";

@Component({
  selector: 'app-track-edit',
  templateUrl: './track-edit.component.html',
  styleUrls: ['./track-edit.component.scss']
})
export class TrackEditComponent implements OnInit, OnChanges {
  @Input() album:number = 0;

  ShowTrack:boolean = false;
  TrackToShow:number = 0;

  constructor(public trackService:TrackService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.ShowTrack = false;
    for(let track of  this.trackService.tracks){
      track['albumID'] = this.album;
    }
  }

  addTrack(){
    this.trackService.tracks.push({'albumID': this.album, 'trackNum':  this.trackService.tracks.length + 1, 'nom': 'Piste Sans nom', 'duree':'00:00'});
  }

  showTrack(id:number){
    this.TrackToShow = id;
    this.ShowTrack = true;
  }
}

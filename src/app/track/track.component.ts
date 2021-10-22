import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TrackService} from "../services/trackService/track.service";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnChanges {
  @Input() position:number = 0;
  data:any = [];

  constructor(private trackService:TrackService) { }

  ngOnInit(): void {
    this.load();
  }

  ngOnChanges(): void{
    this.load();
  }

  updateData(key:string, value:string){
    let field = <HTMLInputElement>document.getElementById(value);
    if (field){
      this.data[key] = field.value;
      this.trackService.tracks[this.position] = this.data;
    }

  }

  load(){
    this.data = this.trackService.tracks[this.position];
  }
}

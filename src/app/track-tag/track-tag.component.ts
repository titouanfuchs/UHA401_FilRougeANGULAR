import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-track-tag',
  templateUrl: './track-tag.component.html',
  styleUrls: ['./track-tag.component.scss']
})
export class TrackTagComponent implements OnChanges {

  @Input() track:any = {};
  tooltipText:string = "";
  constructor() { }

  ngOnChanges(): void {
    this.tooltipText = "Durée : " + this.track['duree'];
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-track-tag',
  templateUrl: './track-tag.component.html',
  styleUrls: ['./track-tag.component.scss']
})
export class TrackTagComponent implements OnInit {

  @Input() track:any = {};
  constructor() { }

  ngOnInit(): void {
  }

}

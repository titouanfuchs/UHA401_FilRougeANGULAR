import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-genre-tag',
  templateUrl: './genre-tag.component.html',
  styleUrls: ['./genre-tag.component.scss']
})
export class GenreTagComponent implements OnInit {

  @Input() tagName: string = "Pas de Tag";

  constructor() { }

  ngOnInit(): void {
  }

}

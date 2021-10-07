import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

  @Input() GroupName: string = "Group Sans Nom";
  @Input() GroupChanteur: string = "Chanteur Sans Nom";
  @Input() GroupOrigin: string = "Pas d'origine";
  @Input() GroupGenres: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}

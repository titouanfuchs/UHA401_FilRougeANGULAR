import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

  GroupName: string = "Group Sans Nom";
  GroupChanteur: string = "Chanteur Sans Nom";
  GroupOrigin: string = "Pas d'origine";

  constructor() { }

  ngOnInit(): void {
  }

}

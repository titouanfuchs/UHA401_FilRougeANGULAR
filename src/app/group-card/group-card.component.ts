import {Component, Input, OnInit} from '@angular/core';
import {GroupesService} from "../services/groupesService/groupes.service";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

  @Input() GroupID: number = -1;
  @Input() GroupName: string = "Group Sans Nom";
  @Input() GroupChanteur: string = "Chanteur Sans Nom";
  @Input() GroupOrigin: string = "Pas d'origine";
  @Input() GroupGenres: any[] = [];

  getAlbums(groupID:number){
    this.groupesService.getGroupAlbums(groupID);
  }

  constructor(private groupesService:GroupesService) { }

  ngOnInit(): void {
  }
}

import {Component, OnInit} from '@angular/core';
import {GroupesService} from "./services/groupes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angular-apiMusic';
  groupes: any[] = [];

  constructor(private groupeService: GroupesService) {

  }

  ngOnInit() {
    this.groupes = this.groupeService.groupes;
  }
}

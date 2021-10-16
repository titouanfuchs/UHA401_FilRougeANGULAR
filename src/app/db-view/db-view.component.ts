import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-view',
  templateUrl: './db-view.component.html',
  styleUrls: ['./db-view.component.scss']
})
export class DbViewComponent implements OnInit {

  keys = ["id", "test", "test2", "test3"]

  constructor() { }

  ngOnInit(): void {
  }

}

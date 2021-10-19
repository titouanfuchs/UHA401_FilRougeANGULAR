import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";

@Component({
  selector: 'app-db-view',
  templateUrl: './db-view.component.html',
  styleUrls: ['./db-view.component.scss']
})
export class DbViewComponent implements OnInit, OnChanges {

  @Input() apiName = "Pas d'api";
  APIContent = [];
  keys:any = [];

  albumID: number = 1;

  constructor(private adminService:AdminModalManagerService) { }

  reload(){
    this.adminService.getKeys(this.apiName).subscribe((result:any) => {
      this.keys = result;
    })

    this.adminService.getAPI(this.apiName).subscribe((result:any) =>{
      this.APIContent = result;
    })
  }

  showDeleteModal(id:number){
    this.albumID = id;
    let triggerLoadButton: any = document.getElementById("TriggersuppData");

    if (triggerLoadButton){
      triggerLoadButton.click();
    }
  }

  ngOnInit(): void {
    this.reload();
  }

  ngOnChanges() {
    this.reload();
  }
}
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";
import {Subscription} from "rxjs";
import {AlbumsService} from "../services/albumsService/albums.service";

@Component({
  selector: 'app-db-view',
  templateUrl: './db-view.component.html',
  styleUrls: ['./db-view.component.scss']
})
export class DbViewComponent implements OnInit, OnChanges {
  refreshSub: Subscription = new Subscription();
  @Input() apiName = "Pas d'api";

  APIContent = [];
  keys:any = [];

  showAdd: boolean = false;

  albumID: number = 1;

  constructor(private adminService:AdminModalManagerService, private albumService:AlbumsService) { }

  reload(){
    this.showAdd = false;
    this.adminService.getKeys(this.apiName).subscribe((result:any) => {
      this.keys = result;
    })

    this.adminService.getAPI(this.apiName).subscribe((result:any) =>{
      for(let album of result){
        this.albumService.getAlbumByID(result['album']).subscribe((al:any) =>{
          album['albumID'] = album['album'];
          album['album'] = al;
        })
      }

      this.APIContent = result;
    })
  }

  showAddModal(){
    this.showAdd = true;
  }

  showDeleteModal(id:number){
    this.albumID = id;
    let triggerModalButton: any = document.getElementById("TriggersuppData");

    if (triggerModalButton){
      triggerModalButton.click();
    }
  }

  showEditModal(id:number){
    this.albumID = id;
    let triggerModalButton: any = document.getElementById("TriggereditData");

    if (triggerModalButton){
      triggerModalButton.click();
    }
  }

  parseJSON(data:string): any{
    return JSON.parse(data);
  }

  ngOnInit(): void {
    this.refreshSub = this.adminService.refreshComponent.subscribe(() =>{
      this.reload();
    });
    //this.reload();
  }

  ngOnChanges() {
    this.reload();
  }
}

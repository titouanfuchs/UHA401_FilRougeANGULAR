import { Component, OnInit } from '@angular/core';
import {AlbumsService} from "../services/albumsService/albums.service";
import {Subscription} from "rxjs";
import {DetailsService} from "../services/detailsService/details.service";
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  data:any = {"album": 0}

  albumsSubscribe: Subscription = new Subscription();
  albums = [];

  constructor(private albumService:AlbumsService, private detailsService:DetailsService, private adminService:AdminModalManagerService) { }

  ngOnInit(): void {
    this.albumsSubscribe = this.albumService.albumSubject.subscribe((al:any) => {
      this.albums = al;
    })
    this.albumService.searchAlbum("");
  }

  updateData(key:string, val:string){
    this.data[key] = val;
  }

  onDescriptionUpdate(event:any){
    this.data["description"] = event.target.value;
  }

  onLastFmUpdate(event:any){
    this.data["lastfm"] = event.target.value;
  }

  initPostToDetails(){
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    if (triggerLoadButton != null){
      triggerLoadButton.click();
      this.detailsService.postAlbumDetails(this.data).subscribe((result:any) => {
        setTimeout(() =>{
          this.adminService.showResumeModal(result);
          this.adminService.askRefresh();
        }, 1000)
      })
    }
  }
}

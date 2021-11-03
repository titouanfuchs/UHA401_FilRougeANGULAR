import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DetailsService} from "../services/detailsService/details.service";
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";
import {AlbumsService} from "../services/albumsService/albums.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-remove-details',
  templateUrl: './remove-details.component.html',
  styleUrls: ['./remove-details.component.scss']
})
export class RemoveDetailsComponent implements OnInit, OnChanges {
  constructor( private detailsService:DetailsService, private adminService:AdminModalManagerService, private albumService:AlbumsService) { }

  @Input() albumID: number = 0;
  details: any = {};

  ngOnInit(): void {
    console.log(this.albumID);
    this.update();
  }

  ngOnChanges(): void {
    this.update();
  }

  update(){
    if (this.albumID !== 0){
      this.detailsService.getAlbumDetailsSimple(this.albumID).subscribe( (result:any) => {
        if (result[0]){
          this.albumService.getAlbumByID(this.albumID).subscribe((album:any) => {
            this.details = result[0];
            this.details['album'] = album[0]['nom'] + " - " + album[0]['artiste'];
          })
        }
      });
    }
  }

  initDeleteData(){
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    if (triggerLoadButton != null){
      triggerLoadButton.click();
      this.detailsService.deleteAlbumDetails(this.albumID).subscribe((result:any) => {
        setTimeout(() =>{
          this.adminService.showResumeModal(result);
          this.adminService.askRefresh();
        }, 1000)
      })
    }
  }
}

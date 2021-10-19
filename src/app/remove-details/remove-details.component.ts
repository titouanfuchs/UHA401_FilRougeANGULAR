import {Component, Input, OnInit} from '@angular/core';
import {DetailsService} from "../services/detailsService/details.service";
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";
import {AlbumsService} from "../services/albumsService/albums.service";

@Component({
  selector: 'app-remove-details',
  templateUrl: './remove-details.component.html',
  styleUrls: ['./remove-details.component.scss']
})
export class RemoveDetailsComponent implements OnInit {

  constructor( private detailsService:DetailsService, private adminService:AdminModalManagerService, private albumService:AlbumsService) { }

  @Input() albumID: number = 0;
  details: any = {};

  ngOnInit(): void {
    this.detailsService.getAlbumDetailsSimple(this.albumID).subscribe( (result:any) => {
      this.albumService.getAlbumByID(this.albumID).subscribe((album:any) => {
        this.details = result[0];
        this.details['album'] = album['nom'] + " - " + album['artiste'];
      })
    });
  }

  initDeleteData(){
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    if (triggerLoadButton != null){
      triggerLoadButton.click();
      this.detailsService.deleteAlbumDetails(this.details['album']).subscribe((result:any) => {
        setTimeout(() =>{
          this.adminService.showResumeModal(result);
        }, 1000)
      })
    }
  }
}

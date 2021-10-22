import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DetailsService} from "../services/detailsService/details.service";
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";
import {AlbumsService} from "../services/albumsService/albums.service";
import {TrackService} from "../services/trackService/track.service";

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit, OnChanges {

  @Input() albumID: number = 0;
  details: any = {};
  validity = [true, true];

  constructor(private trackService:TrackService,private detailsService:DetailsService, private adminService:AdminModalManagerService, private albumService:AlbumsService) { }

  ngOnInit(): void {
    this.update();
  }

  ngOnChanges(): void {
    this.update();
  }

  update(){
    this.detailsService.getAlbumDetailsSimple(this.albumID).subscribe( (result:any) => {
      this.albumService.getAlbumByID(this.albumID).subscribe((album:any) => {
        this.details = result[0];
        this.details['album'] = album[0]['nom'] + " - " + album[0]['artiste'];
        this.trackService.tracks = JSON.parse(this.details['tracks']);
      })
    });
  }

  initEditData(){
    this.details['album'] = this.albumID;
    if (this.trackService.tracks.length > 0){
      this.details['tracks'] = this.trackService.tracks;
    }
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    if (triggerLoadButton != null){
      triggerLoadButton.click();
      this.detailsService.EditAlbumDetails(this.albumID).subscribe((result:any) => {
        setTimeout(() =>{
          this.adminService.showResumeModal(result);
          this.adminService.askRefresh();
        }, 1000)
      })
    }
  }

  checkValidity(): boolean{
    return this.validity[0] && this.validity[1];
  }

  onDescriptionUpdate(event:any){
    this.validity[0] = event.target.value != "";
    this.details["description"] = event.target.value;
  }

  onLastFmUpdate(event:any){
    this.validity[1] = event.target.value != "" && event.target.value.length < 1000;
    this.details["lastfm"] = event.target.value;
  }
}

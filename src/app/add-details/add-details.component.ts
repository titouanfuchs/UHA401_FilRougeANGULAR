import { Component, OnInit } from '@angular/core';
import {AlbumsService} from "../services/albumsService/albums.service";
import {Subscription} from "rxjs";
import {DetailsService} from "../services/detailsService/details.service";
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";
import {TrackService} from "../services/trackService/track.service";

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  data:any = {"album": 0}
  validity = [false, false, false];

  ShowTrack:boolean = false;
  TrackToShow:number = 0;

  albumsSubscribe: Subscription = new Subscription();
  albums = [];

  constructor(public trackService:TrackService,private albumService:AlbumsService, private detailsService:DetailsService, private adminService:AdminModalManagerService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.albumsSubscribe = this.albumService.albumSubject.subscribe((al:any) => {
      this.albums = al;
      this.trackService.tracks = [];
    })
    this.albumService.searchAlbum("");
  }

  addTrack(){
    this.trackService.tracks.push({'albumID': this.data['album'], 'trackNum':  this.trackService.tracks.length + 1, 'nom': 'Piste Sans nom', 'duree':'00:00'});
  }

  showTrack(id:number){
    this.TrackToShow = id;
    this.ShowTrack = true;
  }

  updateData(key:string, val:string){
    this.validity[0] = val != "0";
    this.data[key] = val;

    for(let track of  this.trackService.tracks){
      track['albumID'] = val;
    }
  }

  onDescriptionUpdate(event:any){
    this.validity[1] = event.target.value != "";
    this.data["description"] = event.target.value;
  }

  onLastFmUpdate(event:any){
    this.validity[2] = event.target.value != "" && event.target.value.length < 1000;
    this.data["lastfm"] = event.target.value;
  }

  checkValidity(): boolean{
    return this.validity[0] && this.validity[1] && this.validity[2];
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

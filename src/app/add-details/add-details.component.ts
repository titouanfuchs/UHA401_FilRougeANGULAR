import { Component, OnInit } from '@angular/core';
import {AlbumsService} from "../services/albumsService/albums.service";
import {Subscription} from "rxjs";
import {DetailsService} from "../services/detailsService/details.service";

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  data:any = {"album": 0}

  albumsSubscribe: Subscription = new Subscription();
  albums = [];

  constructor(private albumService:AlbumsService, private detailsService:DetailsService) { }

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
    console.log(this.data);
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    if (triggerLoadButton != null){
      triggerLoadButton.click();
      setTimeout(() =>{

      }, 1000)
    }
  }
}

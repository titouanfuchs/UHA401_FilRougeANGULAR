import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  details = [];
  currentAlbum = {};
  detailsSubject = new Subject<any[]>();

  constructor(private httpClient:HttpClient) { }

  getAlbumDetails(albumID:number, album:any){
    this.httpClient
      .get<any>("api/details/" + albumID)
      .subscribe((response) =>{
        this.currentAlbum = album;
        this.details = response;
      }, (error) => {
        console.log(error);
      });
  }

}

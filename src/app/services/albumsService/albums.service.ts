import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums = [];
  albumSubject = new Subject<any[]>();

  private emitAlbumsSubject(){
    this.albumSubject.next(this.albums.slice());
  }

  constructor(private httpClient:HttpClient) { }

  getAlbumByGroup(groupId:number){
    this.httpClient
      .get<any>("api/albums?groupe=" + groupId)
      .subscribe((response) =>{
        this.albums = response;
        this.emitAlbumsSubject();
      }, (error) => {
        console.log(error);
      });
  }

  getAlbumByID(albumID:number): Observable<any>{
    return this.httpClient.get("api/albums/" + albumID);
  }

  searchAlbum(searcharg:string){
    if (searcharg){
      console.log("search");
      this.httpClient
        .get<any>("api/albums?search=" + searcharg)
        .subscribe((response) =>{
          this.albums = response;
          this.emitAlbumsSubject();
        }, (error) => {
          console.log(error);
        });
    }else{
      console.log("No Search");
      this.httpClient
        .get<any>("api/albums")
        .subscribe((response) =>{
          this.albums = response;
          this.emitAlbumsSubject();
        }, (error) => {
          console.log(error);
        });
    }
  }
}

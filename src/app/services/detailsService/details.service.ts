import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  details = [{"isDetails":0, "currentAlbum":{}, "details":[]}];
  detailsSubject = new Subject<any[]>();

  constructor(private httpClient:HttpClient) { }

  private emitDetailsSubject(){
    this.detailsSubject.next(this.details);
  }

  getAlbumDetails(albumID:number, album:any){
    this.httpClient
      .get<any>("api/details/" + albumID)
      .subscribe((response) =>{
        if (response['status'] === 0){
          this.details[0]['isDetails'] = 0;
          this.emitDetailsSubject();
        }else{
          this.details[0]['isDetails'] = 1;
          this.details[0]['currentAlbum'] = album;
          this.details[0]['details'] = response[0];
          this.emitDetailsSubject();
        }

      }, (error) => {
        console.log(error);
      });
  }

}

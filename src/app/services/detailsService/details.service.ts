import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

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

  getAlbumDetailsSimple(albumID:number){
    return this.httpClient.get("api/details?album=" + albumID);
  }

  getAlbumDetails(albumID:number, album:any){
    this.httpClient
      .get<any>("api/details?album=" + albumID)
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

  postAlbumDetails(details:any): Observable<any>{
    const httpOptions = {
      headers: {"Content-Type":"application/json","Authorization": "Parcequejailedroit"} //TODO : ce header est utilisé à plusieurs endroit, il pourrait devenir une propriété privée de la classe
    };
    let result:any = [];

    try{
      result = this.httpClient.post("api/details", details, httpOptions);
    }catch (e){
      result['error'] = e;
    }
    return result;
  }

  EditAlbumDetails(details:any): Observable<any>{
    const httpOptions = {
      headers: {"Content-Type":"application/json","Authorization": "Parcequejailedroit"}
    };
    let result:any = [];

    try{
      console.log(details); //TODO : tristesse ...
      result = this.httpClient.put("api/details?album=" + details['album'], details, httpOptions);
    }catch (e){
      result['error'] = e;
    }
    return result;
  }

  deleteAlbumDetails(details:number): Observable<any>{
    const httpOptions = {
      headers: {"Content-Type":"application/json","Authorization": "Parcequejailedroit"}
    };
    let result:any = [];

    try{
      result = this.httpClient.delete("api/details?album=" + details, httpOptions);
    }catch (e){
      result['error'] = e;
    }
    return result;
  }
}

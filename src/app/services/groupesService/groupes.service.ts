import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GroupesService {
  private groupes: any = [];
  groupeSubject = new Subject<any[]>();

  constructor(private httpClient:HttpClient) {
  }

  private emitGroupesSubject(){
    this.groupeSubject.next(this.groupes.slice());
  }

  getGroupAlbums(group: number){
    alert("Requète des albums du groupe : " + group.toString());
  }

  searchGroupe(searcharg:string){
    let result: any[] = [];

    if (searcharg){
      console.log("search");
      this.httpClient
        .get<any>("api/groupes?search=" + searcharg)
        .subscribe((response) =>{
          this.groupes = response;
          this.emitGroupesSubject();
        }, (error) => {
          console.log(error);
      });
    }else{
      console.log("No Search");
      this.httpClient
        .get<any>("api/groupes?search=" + searcharg)
        .subscribe((response) =>{
          this.groupes = response;
          this.emitGroupesSubject();
        }, (error) => {
          console.log(error);
        });
    }
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroupesService {
  constructor(private httpClient:HttpClient) {
  }
  groupes = [];

  getGroupAlbums(group: number){
    alert("Requète des albums du groupe : " + group.toString());
  }

  searchGroupe(searcharg:string) {
    let optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET',
      })
    };
    optionRequete.headers = optionRequete.headers.set('Access-Control-Allow-Origin','Access-Control-Allow-Methods' );
    if (searcharg){
      console.log("search");
      this.httpClient
        .get<any>("api/groupes?search=" + searcharg, optionRequete)
        .subscribe((response) =>{
          for (let groupe in response){

          }
        }, (error) => {
          console.log(error);
      });
    }else{
      console.log("No Search");
      this.httpClient
        .get<any>("api/groupes?search=" + searcharg, optionRequete)
        .subscribe((response) =>{
          let groupes_ = Object.values(response);
          var self = this;
          let result = [];

          groupes_.forEach(function (value){
            result.push(value);
          });

          this.groupes = result;
        }, (error) => {
          console.log(error);
        });
    }
  }
}

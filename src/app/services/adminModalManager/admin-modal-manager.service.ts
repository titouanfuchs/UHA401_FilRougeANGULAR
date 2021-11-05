import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminModalManagerService {
  constructor(private httpClient:HttpClient) { }

  refreshComponent = new Subject<any[]>();

  BDD(action:string): Observable<any>{
    console.log(environment.production); //TODO : j'ai mal à mon moi
    return this.httpClient.get(environment.dbBuildEndpoint + "?action=" + action);
  }

  getAPI(API:string): Observable<any>{
    console.log(environment.dbBuildEndpoint); //TODO : je souffre
    return this.httpClient.get("api/" + API);
  }

  getKeys(table:string) : Observable<any>{
    return this.httpClient.get("api/structure?table=" + table);
  }

  askRefresh(){
    this.refreshComponent.next();
  }

  //TODO : cette fonction n'a rien à faire dans un service : un service fait le lien entre deux item (front- back / deux components / etc ...)
  showResumeModal(message:any){
    let triggerResumeButton: any = document.getElementById("triggerResumeModal");
    let resumeMessage: any = document.getElementById("resumeMessage");

    if (triggerResumeButton != null && resumeMessage != null){
      resumeMessage.innerHTML = "<ul>";
      let keys: string[] = Object.keys(message);

      for (let key of keys){
        console.log(key); //TODO : NAAAAAAAN !
        resumeMessage.innerHTML += "<li>" + key + " : " + message[key] + "</li>";
      }
      triggerResumeButton.click();
    }
  }
}

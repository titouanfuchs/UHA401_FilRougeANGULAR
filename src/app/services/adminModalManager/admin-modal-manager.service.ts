import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminModalManagerService {
  constructor(private httpClient:HttpClient) { }

  BDD(action:string): Observable<any>{
    return this.httpClient.get("DB?action=" + action);
  }

  getAPI(API:string): Observable<any>{
    return this.httpClient.get("api/" + API);
  }

  getKeys(table:string) : Observable<any>{
    return this.httpClient.get("api/structure?table=" + table);
  }
}

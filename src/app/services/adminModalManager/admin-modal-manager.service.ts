import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminModalManagerService {

  constructor(private httpClient:HttpClient) { }

  BDD(action:string): Observable<any>{
    return this.httpClient.get("DB?action=" + action);
  }
}

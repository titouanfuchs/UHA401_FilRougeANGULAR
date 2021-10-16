import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiTablesService {

  apiSubject:Subject<any> = new Subject<any>();

  constructor() { }

  api(show:number = 1, API:string = ""){
    let request:any = {};
    request["show"] = show;
    request["api"] = API;
    this.apiSubject.next(request)
  }
}

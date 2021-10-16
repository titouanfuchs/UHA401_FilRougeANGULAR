import {Component, OnInit, OnChanges} from '@angular/core';
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";
import {Subject, Subscription} from "rxjs";
import {ApiTablesService} from "../services/apiTablesService/api-tables.service";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  showAPI: number = 0;
  currentAPI: string = "no";

  apiSubscription: Subscription = new Subscription();

  constructor(private adminService:AdminModalManagerService, private apiService:ApiTablesService) { }

  showApi(api:string){
    this.apiService.api(1, api);
  }

  hideApi(){
    this.apiService.api(0);
  }

  callBDDAction(action:number){
    switch (action){
      case 0:
        this.contactBDD("clear");
        break;
      case 1:
        this.contactBDD("fill");
        break;
      case 2:
        this.contactBDD("");
        break;
    }
  }

  contactBDD(action:string){
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    if (triggerLoadButton != null){
      triggerLoadButton.click();
      this.adminService.BDD(action).subscribe((result) => {
        setTimeout(() =>{
          this.showResumeModal(result);
        }, 1000)
      })
    }
  }

  showResumeModal(message:any){
    let triggerResumeButton: any = document.getElementById("triggerResumeModal");
    let resumeMessage: any = document.getElementById("resumeMessage");

    if (triggerResumeButton != null && resumeMessage != null){
      resumeMessage.innerHTML = "<ul>";
      let keys: string[] = Object.keys(message);

      for (let key of keys){
        console.log(key);
        resumeMessage.innerHTML += "<li>" + key + " : " + message[key] + "</li>";
      }
      triggerResumeButton.click();
    }
  }

  ngOnInit(): void {
    this.apiSubscription = this.apiService.apiSubject.subscribe(
      (d:any) => {
        this.currentAPI = d['api'];
        this.showAPI = d['show']
      }
    )
  }
}

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

  //TODO : je ne comprends pas l'intérêt de faire appel à un service pour afficher une page, il faut juste appeler le rooter
  showApi(api:string){
    this.apiService.api(1, api);
  }

  hideApi(){
    this.apiService.api(0);
  }

  //TODO : il est plus parlant que action soit une chaîne de caractères
  callBDDAction(action:number){
    switch (action){
      case 0:
        this.contactBDD("clear");
        break;
      case 1:
        this.contactBDD("fill");
        break;
      case 2:
        this.contactBDD("total");
        break;
    }
  }

  contactBDD(action:string){
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    if (triggerLoadButton != null){
      triggerLoadButton.click();
      this.adminService.BDD(action).subscribe((result:any) => {
        setTimeout(() =>{ //TODO : setTimeout est à éviter le plus possible
          this.adminService.showResumeModal(result);
        }, 1000)
      })
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

import {Component, OnInit} from '@angular/core';
import {AdminModalManagerService} from "../services/adminModalManager/admin-modal-manager.service";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  constructor(private adminService:AdminModalManagerService) { }

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
  }

}

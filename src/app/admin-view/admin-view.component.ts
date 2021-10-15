import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  constructor() { }

  callBDDAction(action:number){
    let triggerLoadButton: any = document.getElementById("triggerLoadModal");
    let triggerResumeButton: any = document.getElementById("triggerResumeModal");
    switch (action){
      case 0:
        console.log("Calling ClearBDD");
        if (triggerLoadButton != null){
          triggerLoadButton.click();
          setTimeout(() =>{
            if (triggerResumeButton != null){
              triggerResumeButton.click();
            }
          }, 5000)
        }
        break;
      case 1:
        console.log("Calling FillBDD");
        break;
    }
  }

  ngOnInit(): void {
  }

}

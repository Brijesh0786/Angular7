import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  status="warning exists";
allow=false;
employeeName="";
  constructor() {
    setTimeout(()=>{
      this.allow=true;
    }, 2000)
   }

  ngOnInit() {
  }
  showstatus(){
    this.status="warning doesn't exist";
  }
  addEmployee(event:Event){
    this.employeeName=(<HTMLInputElement>event.target).value;

  }
}

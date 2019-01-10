import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  status="";
  statusdetails=false;
  statuscolor="online";
  i=0;
  randomnumbers=[];
allow=false;
val="";
employeeName="";
employeeList=['Shuiab', 'Faheem', 'Abinash'];
  constructor() {
    // setTimeout(()=>{
    //   this.allow=true;
    // }, 2000)
    
   }

  ngOnInit() {
  }
  showstatus(){
    this.status="warning doesn't exist";
  }
  // addEmployee(event:Event){
  //   this.employeeName=(<HTMLInputElement>event.target).value;

  // }
  addEmployee(){
    this.allow=true;
    this.status="Employee added is"+ this.employeeName;
    this.employeeList.push(this.employeeName);
this.employeeName="";
  }
  toggle()
  {
this.statusdetails=!this.statusdetails;
this.i++;
this.randomnumbers.push(this.i);
if(this.i>5)
{
  this.statuscolor="offline";
}
  }
  getColor()
  {
    return this.statuscolor==="online"?"green":"red";
   
  }
  showDetails(event:Event){
       this.val=(<HTMLInputElement>event.target).value;
       if(this.val=="" || this.val==null)
       {
        this.allow=false;
       }
       else
       {
        this.allow=true;
       }
  
     }
}

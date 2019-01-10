import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
username="";
status=true;

  constructor() { }
  displayName(event:Event){
    var value=(<HTMLInputElement>event.target).value;
    debugger;
    if(value!=null)
    {
      this.status=false;
    }
  }
  ngOnInit() {
  }

}

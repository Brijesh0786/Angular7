import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
allow=false;
  constructor() {
    setTimeout(()=>{
      this.allow=true;
    }, 2000)
   }

  ngOnInit() {
  }

}

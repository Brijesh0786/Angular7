import { Component, OnInit, Input, EventEmitter, Output,ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() price:string;

lastname="";
@Output() fullnamedisplay=new EventEmitter<{firstname:string, lastname:string}>();
@ViewChild('firstname') firstname:ElementRef;
  constructor() { }

  ngOnInit() {
  }

displayname()
{
this.fullnamedisplay.emit({firstname:this.firstname.nativeElement.value, lastname:this.lastname});
}
}

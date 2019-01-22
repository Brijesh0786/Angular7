import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
price:string;
fullname=[{firstname:'', lastname:''}]
  constructor() { }

  ngOnInit() {
  }
  displayname(nameData:{firstname:string, lastname:string})
  {
  this.fullname.push({
    firstname:nameData.firstname,
    lastname:nameData.lastname
  });
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[]=[
  new Recipe('A Test recipe', 'This is simply a test', "https://static.getjar.com/ss/78/822024_2.png")
];
  constructor() { }

  ngOnInit() {
  }

}

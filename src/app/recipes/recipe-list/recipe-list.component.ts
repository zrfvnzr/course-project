import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
		new Recipe(
			'Test Recipe',
			'Test recipe description',
			'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'
		)
	];

    constructor() { }

    ngOnInit(): void {
    }

}

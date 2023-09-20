import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
		new Recipe(
			'Test Recipe',
			'Test recipe description',
			'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'
		),
        new Recipe(
			'Test Recipe 2',
			'Test recipe description 2',
			'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'
		)
	];

    getRecipes() {
        return this.recipes.slice();
    }

}
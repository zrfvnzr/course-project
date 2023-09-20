import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
		new Recipe(
			'Test Recipe',
			'Test recipe description',
			'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]
		),
        new Recipe(
			'Test Recipe 2',
			'Test recipe description 2',
			'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 3),
            ]
		)
	];

    getRecipes() {
        return this.recipes.slice();
    }

}
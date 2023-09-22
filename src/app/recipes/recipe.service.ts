import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>;

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

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    constructor(private shoppingListService: ShoppingListService) {}

}
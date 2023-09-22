import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
    ) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put('localhost:8080/api/recipes', recipes)
            .subscribe((response: any) => {
                console.log(response);
            });
    }

    fetchRecipes() {
        this.httpClient
            .get<Recipe[]>('localhost:8080/api/recipes')
            .subscribe(recipes => {
                this.recipeService.setRecipes(recipes);
            });
    }

}
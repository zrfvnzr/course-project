import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] | undefined;
    subscription: Subscription | undefined;

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
        this.subscription = this.recipeService.recipesChanged
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipes = recipes;
                }
            )
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

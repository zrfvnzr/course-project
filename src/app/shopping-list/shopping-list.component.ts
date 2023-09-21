import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] | undefined;

    private ingredientChangeSubscription: Subscription | undefined;

    onEditItem(i: number) {
        this.shoppingListService.startedEditing.next(i);
    }

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientChangeSubscription = this.shoppingListService.ingredientsChanged
            .subscribe(
                (ingredients: Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            );
    }

    ngOnDestroy(): void {
        this.ingredientChangeSubscription?.unsubscribe();
    }

}

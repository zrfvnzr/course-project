import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

    subscription: Subscription | undefined;
    editMode = false;
    editedItemIndex: number | undefined;
    editedItem: Ingredient | undefined;

    @ViewChild('form', { static: false }) form: NgForm | undefined;

    constructor(private shoppingListService: ShoppingListService) {

    }

    ngOnInit(): void {
        this.subscription = this.shoppingListService.startedEditing
            .subscribe(
                (index: number) => {
                    this.editMode = true;
                    this.editedItemIndex = index;
                    this.editedItem = this.shoppingListService.getIngredient(index);
                    this.form?.setValue({
                        name: this.editedItem.name,
                        amount: this.editedItem.amount,
                    });
                }
            );
    }

	onAddItem(form: NgForm) {
        const value = form.value;
		const newIngredient = new Ingredient(value.name, value.amount);
        this.shoppingListService.addIngredient(newIngredient);
	}

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

}

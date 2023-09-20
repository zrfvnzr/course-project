import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

	@ViewChild('nameInput', { static: false }) nameInputRef: ElementRef | undefined;
	@ViewChild('amountInput', { static: false }) amountInputRef: ElementRef | undefined;

    constructor(private shoppingListService: ShoppingListService) {

    }

    ngOnInit(): void {
    }

	onAddItem() {
		const name = this.nameInputRef?.nativeElement.value;
		const amount = this.amountInputRef?.nativeElement.value;
		const newIngredient = new Ingredient(name, amount);
        this.shoppingListService.addIngredient(newIngredient);
	}

}

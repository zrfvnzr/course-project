import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

	@ViewChild('nameInput', { static: false }) nameInputRef: ElementRef | undefined;
	@ViewChild('amountInput', { static: false }) amountInputRef: ElementRef | undefined;
	@Output() ingredientAdded = new EventEmitter<Ingredient>();

    constructor() { }

    ngOnInit(): void {
    }

	onAddItem() {
		const name = this.nameInputRef?.nativeElement.value;
		const amount = this.amountInputRef?.nativeElement.value;
		const newIngredient = new Ingredient(name, amount);
		this.ingredientAdded.emit(newIngredient);
	}

}

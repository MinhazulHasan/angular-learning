import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientRemoved = new EventEmitter<void>();
  @Output() ingredientCleared = new EventEmitter<void>();
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    if (ingName === '' || ingAmount === '') {
      alert('Please enter a valid value');
    }
    const newIngredieent = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredieent);
  }
  onRemoveItem() {
    this.ingredientRemoved.emit();
  }
  onClearItem() {
    this.ingredientCleared.emit();
  }
}

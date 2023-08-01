import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import Swal from 'sweetalert2';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() ingredientRemoved = new EventEmitter<void>();
  @Output() ingredientCleared = new EventEmitter<void>();
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  constructor(private slService: ShoppingListService) { }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    if (ingName === '' || ingAmount === '') {
      Swal.fire({
        icon: 'error',
        text: 'Please enter a valid value',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    const newIngredieent = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredieent);
  }
  onRemoveItem() {
    this.ingredientRemoved.emit();
  }
  onClearItem() {
    this.ingredientCleared.emit();
  }
}

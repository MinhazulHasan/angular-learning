import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid value',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
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

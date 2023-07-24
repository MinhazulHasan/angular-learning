import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onIngredientAdded(ingredientInput: Ingredient) {
    this.ingredients.push(ingredientInput);
  }
  onIngredientRemoved() {
    this.ingredients.pop();
  }
  onIngredientCleared() {
    this.ingredients = [];
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientInput: Ingredient) {
    this.ingredients.push(ingredientInput);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredientsInput: Ingredient[]) {
    this.ingredients.push(...ingredientsInput);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() { }
}
 
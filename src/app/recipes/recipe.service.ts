import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is simply a test 1',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Freanch Fry', 20)
      ]
    ),
    new Recipe(
      'Test Recipe 2',
      'This is simply a test 2',
      'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Freanch Fry', 20)
      ]
    ),
    new Recipe(
      'Test Recipe 3',
      'This is simply a test 3',
      'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Freanch Fry', 20)
      ]
    ),
    new Recipe(
      'Test Recipe 4',
      'This is simply a test 4',
      'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Freanch Fry', 20)
      ]
    ),
    new Recipe(
      'Test Recipe 5',
      'This is simply a test 5',
      'https://i0.wp.com/www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg?resize=760%2C984&ssl=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Freanch Fry', 20)
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  constructor(private slService: ShoppingListService) { }
}

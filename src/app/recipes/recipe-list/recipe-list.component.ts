import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is simply a test 1',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is simply a test 2',
      'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066'
    ),
    new Recipe(
      'Test Recipe 3',
      'This is simply a test 3',
      'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg'
    ),
    new Recipe(
      'Test Recipe 4',
      'This is simply a test 4',
      'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg'
    ),
    new Recipe(
      'Test Recipe 5',
      'This is simply a test 5',
      'https://i0.wp.com/www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg?resize=760%2C984&ssl=1'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

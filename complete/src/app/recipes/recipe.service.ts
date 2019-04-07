import {EventEmitter, Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  //adding event emitter that will hold some Recipe data
  recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
  	new Recipe(
  	  ' A Tasty Schnitzel',
      'This is simple test',
      'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.savoredjourneys.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fschnitzel-germany.jpg',
      [
       new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
     ]),
  	new Recipe(
  	  'Big Fat Burger',
      'This is simple test',
      'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.wp.com%2Fwww.mybigfathalalblog.com%2Fwp-content%2Fuploads%2F2017%2F08%2FFullSizeRender.jpg-5.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Mean', 1),
        new Ingredient('Green Pepper', 1),
        new Ingredient('Paprika', 1),
        new Ingredient('Cheese', 2),
        new Ingredient('Onion', 1)
      ]

      )
  ];

	constructor(private slService: ShoppingListService){

  }

  getRecipes() {
  	return this.recipes.slice(); //returns a new array with an exact copy of the private array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}

import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';


// -- Para informar que sta parte pode ser usado em qualquer componente do app --

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'Beef Wellington',
      image: 'assets/beefWellington.webp',
      rarity: 'Legendary',
      category: 'Main courses',
      appliance: 'Oven',
      foodType: 'BBQ',
      dietType: 'Meat',
      price: 1245,
      ingredients: [
        { name: 'Waguy Steak'},
        { name: 'Boar Meat'},
        { name: 'Flour'},
        { name: 'Red Wine'},
        { name: 'Mushroom'}
      ]
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeByName(name: string): Recipe | undefined {
    return this.recipes.find(r => r.name === name);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  

}

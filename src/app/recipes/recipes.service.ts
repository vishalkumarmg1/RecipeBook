import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private  recipes: Recipe[] = [
    {
      id : 'r1',
      title : 'Banana Shake',
      imageURL : 'https://www.asweetpeachef.com/wp-content/uploads/2014/01/chocolate-peanut-butter-and-banana-protein-shake-2-8.jpg',
      ingredients : ['Banana','Milk','Sugar'] 
    },
    {
      id : 'r2',
      title : 'Strawberry Shake',
      imageURL : 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/thai-kitchen/s/800/strawberry-coconut-milk-smoothie.ashx?vd=20180710T053113Z&hash=012AC64E1106B45998F94E3CB18A29468A59594E',
      ingredients : ['Strawberry','Milk','Sugar'] 
    }

    
  ]

  constructor(private recipesService : RecipesService) { }

  getAllRecipes()  {
    return [...this.recipes];
  }

  getRecipe(recipeId : string){
    return {...this.recipes.find(recipes=>{
      return recipes.id===recipeId;
    })}
  }


  deleteRecipe(recipeId : string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
  });
}
}

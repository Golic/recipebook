import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Italian spagetti',' Jamie Oliver Spagetti','https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg'),
    new Recipe('Serbian meal', 'Bacon wrapped meat','https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg'),
    new Recipe('Alaskan salmon', 'Salmon Alaska style','https://foxeslovelemons.com/wp-content/uploads/2013/09/Roasted-Salmon-with-Spicy-Apricot-Glaze1.jpg')]

    ngOnInit(){

    }
    onRecipeSelected(recipe:Recipe){
      this.recipeWasSelected.emit(recipe);
    }
}

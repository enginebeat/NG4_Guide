import { Component } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent{
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'this is a simple test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/fluffyamericanpancak_74828_16x9.jpg')
    ];
}
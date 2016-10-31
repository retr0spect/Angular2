import {ReactiveFormsModule} from "@angular/forms";
import {RecipesComponent} from "./recipes.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {recipesRouting} from "./recipes.routes";

@NgModule({
    declarations: [
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipesComponent
    ],
    imports: [ReactiveFormsModule, CommonModule, recipesRouting]
})

export class RecipesModule {
}
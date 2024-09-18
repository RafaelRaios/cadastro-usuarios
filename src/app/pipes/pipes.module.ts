import { NgModule } from "@angular/core";
import { GenreDescriptionPipe } from './genre-description.pipe';
import { FavoriteDescriptionPipe } from './favorite-description.pipe';
import { StateNamePipe } from './state-name.pipe';

@NgModule({
    declarations: [
    GenreDescriptionPipe,
    FavoriteDescriptionPipe,
    StateNamePipe,
  ],
    exports: [
      GenreDescriptionPipe,
      FavoriteDescriptionPipe,
      StateNamePipe,
    ],
})
export class PipesModule {}

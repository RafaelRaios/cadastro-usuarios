import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteDescription'
})
export class FavoriteDescriptionPipe implements PipeTransform {

  transform(isFavorite: boolean): string {
    return isFavorite ? "é música favorita deste usuário": "";
  }

}

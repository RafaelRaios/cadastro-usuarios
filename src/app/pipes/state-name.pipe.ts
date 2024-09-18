import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStatesService } from '../services/brazilian-states.service';

@Pipe({
  name: 'stateName'
})
export class StateNamePipe implements PipeTransform {
  constructor(
    private readonly _stateService: BrazilianStatesService,
  ) {}

  transform(stateID: number): string {
    return this._stateService.getStateDescription(stateID);
  }

}

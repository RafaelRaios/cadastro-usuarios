import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import * as zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrenghtValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordStrenghtValidatorDirective,
    multi: true,
  }]
})
export class PasswordStrenghtValidatorDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control || !control.value) return null;

    const result = zxcvbn(control.value);

    const PASSWORD_IS_WEAK_OR_MEDIUM = result.score !== 4;

    if(PASSWORD_IS_WEAK_OR_MEDIUM) return {"invalidPasswordStrenght": true};

    return null
  }
  

}

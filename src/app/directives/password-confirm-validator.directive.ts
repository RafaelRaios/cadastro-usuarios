import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordConfirmValidatorDirective,
    multi: true,
  }]
})
export class PasswordConfirmValidatorDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.value.confirmacaoSenha) return null;
    const passwordConfirmControl = control.get('confirmacaoSenha');

    if(control.value.senha !== control.value.confirmacaoSenha) {
      passwordConfirmControl?.setErrors( { invalidPasswordConfirmation:true} );

      return { invalidPasswordConfirmation:true}
    }

    return null;
  }
  
}

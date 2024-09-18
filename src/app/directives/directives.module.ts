import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { appCredentialValidator } from "./credential-validator.directive";
import { PasswordStrenghtValidatorDirective } from './password-strenght-validator.directive';
import { PasswordConfirmValidatorDirective } from './password-confirm-validator.directive';

@NgModule({
    declarations: [
      EmailPatternValidatorDirective,
      appCredentialValidator,
      PasswordStrenghtValidatorDirective,
      PasswordConfirmValidatorDirective,
      
    ],
    exports: [
      EmailPatternValidatorDirective,
      appCredentialValidator,
      PasswordStrenghtValidatorDirective,
      PasswordConfirmValidatorDirective,
    ],
})
export class DirectivesModule {}

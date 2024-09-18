import { Directive, forwardRef, Input } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { UsersPlaceholderService } from "../services/users-placeholder.service";

@Directive(
    {
        selector: '[appCredentialValidator]',
        providers: [
            {
                provide: NG_ASYNC_VALIDATORS,
                useExisting: forwardRef(() => appCredentialValidator),
                multi: true,
            }
        ]
    }
)

export class appCredentialValidator implements AsyncValidator{
    @Input('appCredentialValidator') prepToCheck: 'username' | 'email' = 'username';

    constructor (
        private readonly _usersPlaceholderService: UsersPlaceholderService
    ) {}

    validate(control: AbstractControl):
        Promise<ValidationErrors | null> | 
        Observable<ValidationErrors | null> {

        return this._usersPlaceholderService.getUsersPlaceholder().pipe(
            map((usersListResponse) => {
                const hasUser = usersListResponse.find((user) => 
                    user[this.prepToCheck].toLocaleLowerCase() === control.value.trim().toLocaleLowerCase());

                const validatorKey = this.prepToCheck === 'username' ? 'invalidUsername' : 'invalidEmail';

                return hasUser ? { [validatorKey]: true } : null;
            })
        );
    }
    
}
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class ValidateCustom {
 static passwordMatchValidator(controlName: string, matchingControlName: string):ValidatorFn  {
  return (fControl: AbstractControl):ValidationErrors|null => {
    const control = fControl.get(controlName);
    const matchingControl = fControl.get(matchingControlName);
    // if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
    //     return null;
    // }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({passwordMatchValidator: 'contraseñas no coinciden'});
        return {passwordMatchValidator: 'contraseñas no coinciden'};
    } else {
        matchingControl.setErrors(null);
        return null;
    }
    
}
}}

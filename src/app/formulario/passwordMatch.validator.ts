import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


export class ValidateCustom {
 static passwordMatchValidator(controlName: string, matchingControlName: string): ValidationErrors | null {
  return (formGroup: AbstractControl):ValidationErrors|null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    console.log(control,matchingControl)
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({passwordMatchValidator: true});
    } else {
        matchingControl.setErrors(null);
    }
}
}}

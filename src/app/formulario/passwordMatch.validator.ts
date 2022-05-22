import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


export class ValidateCustom {
 static passwordMatchValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
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

import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export interface passwordMatchValidator { (control: AbstractControl): ValidationErrors | null }

export class Validate{
 static passwordMatchValidator(controlName: string, matchingControlName: string): ValidationErrors | null {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordMatchValidator: true });
    } else {
        matchingControl.setErrors(null);
    }
}
}}
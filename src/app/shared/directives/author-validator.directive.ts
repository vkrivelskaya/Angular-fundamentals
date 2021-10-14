import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function authorNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != null && control.value !== '') {
      const isValid = /^[A-Za-z0-9-]+$/.test(control.value);
      if (isValid) {
        return null;
      } else {
        return {
          authorValidator: { valid: false }
        };
      }
    } else {
      return null;
    }
  };
}

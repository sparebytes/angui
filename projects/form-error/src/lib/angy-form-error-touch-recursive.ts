import { FormControl, AbstractControl, FormGroup, FormArray } from "@angular/forms";

export function angyFormErrorTouchRecursive(control: AbstractControl): void {
  if (control instanceof FormControl) {
    control.markAsTouched({ onlySelf: true });
  } else if (control instanceof FormGroup) {
    for (const key in control.controls) {
      const childControl = control.controls[key];
      angyFormErrorTouchRecursive(childControl);
    }
  } else if (control instanceof FormArray) {
    for (const childControl of control.controls) {
      angyFormErrorTouchRecursive(childControl);
    }
  }
}

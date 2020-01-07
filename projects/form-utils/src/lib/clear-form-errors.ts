import { AbstractControl } from "@angular/forms";
import { traverseFormControls } from "./traverse-form-controls";

export function clearFormErrors(rootControl: AbstractControl) {
  rootControl.markAsPristine();
  rootControl.markAsUntouched();
  traverseFormControls(rootControl, {
    bubble: control => {
      control.setErrors(null);
    },
  });
}

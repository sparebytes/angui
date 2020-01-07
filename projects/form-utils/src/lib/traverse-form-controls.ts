import { AbstractControl, FormGroup, FormArray } from "@angular/forms";

export interface TraverseFormControlsCallbacks {
  capture?: (control: AbstractControl) => void;
  bubble?: (control: AbstractControl) => void;
}

const noopCallback = (control: AbstractControl) => {};

export function traverseFormControls(rootControl: AbstractControl, callbacks: TraverseFormControlsCallbacks) {
  if (rootControl == null) {
    throw new Error("rootControl is null");
  }
  const capture = callbacks.capture || noopCallback;
  const bubble = callbacks.bubble || noopCallback;
  _traverseFormControls(rootControl, capture, bubble);
}

function _traverseFormControls(
  control: AbstractControl,
  capture: (control: AbstractControl) => void,
  bubble: (control: AbstractControl) => void,
) {
  capture(control);
  if (control instanceof FormGroup) {
    for (const name in control.controls) {
      const child = control.controls[name];
      _traverseFormControls(child, capture, bubble);
    }
  } else if (control instanceof FormArray) {
    for (const child of control.controls) {
      _traverseFormControls(child, capture, bubble);
    }
  }
  bubble(control);
}

import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { clearFormErrors } from "@angy/form-utils";

@Component({
  selector: "app-angy-form-error-example",
  templateUrl: "./angy-form-error-example.component.html",
  styleUrls: ["./angy-form-error-example.component.scss"],
})
export class AngyFormErrorExampleComponent {
  constructor() {}

  formGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    couponCode: new FormControl(""),
    agree: new FormControl(false, [Validators.requiredTrue]),
  });

  submit() {
    return false;
  }

  validate() {
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();

    const valid = this.formGroup.valid;
    console.log(
      this.formGroup.valid,
      this.formGroup.controls.agree.errors,
      this.formGroup.controls.agree.touched,
      this.formGroup.controls.agree.invalid,
    );
  }

  reset() {
    // console.log("before", JSON.stringify({ errors: this.formGroup.errors, values: this.formGroup.value }));
    this.formGroup.reset({
      name: "",
      email: "",
      couponCode: "",
      agree: false,
    });
    clearFormErrors(this.formGroup);
    // console.log("after", JSON.stringify({ errors: this.formGroup.errors, values: this.formGroup.value }));
  }
}

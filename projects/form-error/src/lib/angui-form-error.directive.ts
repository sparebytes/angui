import { Component, Inject, Input, OnDestroy, Optional } from "@angular/core";
import { AbstractControl, ControlContainer } from "@angular/forms";
import { watchControl } from "@angui/form-utils";
import { BehaviorSubject, combineLatest, of, Subscription } from "rxjs";
import { startWith, switchMap } from "rxjs/operators";
import {
  AnguiFormErrorMessageHandler,
  AnguiFormErrorMessages,
  ANGUI_FORM_ERROR_MESSAGES,
} from "./angui-form-error-validation-message-functions";

// @Directive({ selector: "[angui-form-error]" })
@Component({
  selector: "[angui-form-error],mat-error[angui-form-error]",
  template: `
    <ng-container *ngIf="!hideAutoMessage">{{ error }}</ng-container>
    <ng-content *ngIf="error"></ng-content>
  `,
})
export class AnguiFormErrorDirective implements OnDestroy {
  constructor(
    @Inject(ANGUI_FORM_ERROR_MESSAGES) private validationErrorMessageFunctions: AnguiFormErrorMessages,
    @Optional() private controlContainer?: ControlContainer,
  ) {}

  ngOnDestroy() {
    this.control$.complete();
    this.statusSubscription.unsubscribe();
    if (this.unwatchControlFn) {
      this.unwatchControlFn();
      this.unwatchControlFn = undefined;
    }
  }

  errorKey: string | null = null;
  error: string = "";

  control$ = new BehaviorSubject<AbstractControl | null>(null);
  statusSubscription: Subscription = this.control$
    .pipe(
      switchMap(control =>
        combineLatest(of(control), control ? control.statusChanges.pipe(startWith(control.status)) : of(null)),
      ),
    )
    .subscribe(([control, status]) => {
      console.log("angui", { control, status });
      if (control == null || status == null || status === "VALID") {
        this.errorKey = null;
        this.error = "";
      } else if (status === "INVALID") {
        const errorKey = (this.errorKey = Object.keys(control.errors!)[0]);
        const errorObj = control.errors![errorKey];
        const messageHandler: AnguiFormErrorMessageHandler = (this.validationErrorMessageFunctions as any)[errorKey];
        if (messageHandler == null) {
          this.error = "invalid";
        } else if (typeof messageHandler === "string") {
          this.error = messageHandler;
        } else if (typeof messageHandler === "function") {
          this.error = messageHandler(null, control.value, errorObj);
        } else {
          this.error = "invalid";
          console.error("Invalid Message Handler: ", { control, status, messageHandler });
        }
      } else {
        console.error("Invalid Control status: ", { control, status });
      }
    });

  unwatchControlFn?: () => void;

  @Input("angui-form-error")
  set _control(value: string | AbstractControl | null | undefined) {
    let control: AbstractControl | null;
    if (value == null) {
      control = null;
    } else if (typeof value === "string") {
      if (this.controlContainer == null || this.controlContainer.control == null) {
        throw new Error(`Control Container is null for "${value}".`);
      }

      control = this.controlContainer.control.get(value);
      if (control == null) {
        throw new Error(`Control "${value}" could not be found.`);
      }
    } else {
      control = value;
    }

    if (control === this.control$.value) {
      return;
    }

    if (this.unwatchControlFn) {
      this.unwatchControlFn();
      this.unwatchControlFn = undefined;
    }

    if (control) {
      // Hack to ensure validation continues to run after the form has been reset.
      this.unwatchControlFn = watchControl(control, (control, p, v) => {
        if (p === "touched" && v) {
          control!.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

    this.control$.next(control);
  }

  @Input("hideAutoMessage")
  hideAutoMessage = false;
}

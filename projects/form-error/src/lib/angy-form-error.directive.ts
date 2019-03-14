import { Component, Inject, Input, OnDestroy, Optional } from "@angular/core";
import { AbstractControl, ControlContainer } from "@angular/forms";
import { BehaviorSubject, combineLatest, of, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import {
  AngyFormErrorMessageHandler,
  AngyFormErrorMessages,
  ANGY_FORM_ERROR_MESSAGES,
} from "./angy-form-error-validation-message-functions";

// @Directive({ selector: "[angy-form-error]" })
@Component({
  selector: "[angy-form-error],mat-error[angy-form-error]",
  template: `
    <ng-container *ngIf="!hideAutoMessage">{{ error }}</ng-container>
    <ng-content *ngIf="error"></ng-content>
  `,
})
export class AngyFormErrorDirective implements OnDestroy {
  constructor(
    @Inject(ANGY_FORM_ERROR_MESSAGES) private validationErrorMessageFunctions: AngyFormErrorMessages,
    @Optional() private controlContainer: ControlContainer | undefined,
  ) {}

  ngOnDestroy() {
    this.control$.complete();
    this.statusSubscription.unsubscribe();
  }

  errorKey: string | null = null;
  error: string = "";

  control$ = new BehaviorSubject<AbstractControl | null>(null);
  statusSubscription: Subscription = this.control$
    .pipe(switchMap(control => combineLatest(of(control), control ? control.statusChanges : of(null))))
    .subscribe(([control, status]) => {
      if (control == null || status == null || status === "VALID") {
        this.errorKey = null;
        this.error = "";
      } else if (status === "INVALID") {
        const errorKey = (this.errorKey = Object.keys(control.errors!)[0]);
        const errorObj = control.errors![errorKey];
        const messageHandler: AngyFormErrorMessageHandler = (this.validationErrorMessageFunctions as any)[errorKey];
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

  @Input("angy-form-error")
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
    this.control$.next(control);
  }

  @Input("hideAutoMessage")
  hideAutoMessage = false;
}

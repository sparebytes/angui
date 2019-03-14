import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AngyFormErrorDirective } from "./angy-form-error.directive";
import { AngyFormErrorMessageDefaults, ANGY_FORM_ERROR_MESSAGES } from "./angy-form-error-validation-message-functions";

const exported = [AngyFormErrorDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [exported],
  exports: [exported],
})
export class AngyFormErrorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngyFormErrorModule,
      providers: [
        {
          provide: ANGY_FORM_ERROR_MESSAGES,
          useClass: AngyFormErrorMessageDefaults,
        },
      ],
    };
  }
}

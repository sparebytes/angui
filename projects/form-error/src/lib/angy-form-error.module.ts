import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AnguiFormErrorDirective } from "./angui-form-error.directive";
import { AnguiFormErrorMessageDefaults, ANGUI_FORM_ERROR_MESSAGES } from "./angui-form-error-validation-message-functions";

const exported = [AnguiFormErrorDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [exported],
  exports: [exported],
})
export class AnguiFormErrorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AnguiFormErrorModule,
      providers: [
        {
          provide: ANGUI_FORM_ERROR_MESSAGES,
          useClass: AnguiFormErrorMessageDefaults,
        },
      ],
    };
  }
}

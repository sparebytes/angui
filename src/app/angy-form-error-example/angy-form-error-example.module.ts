import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngyFormErrorModule } from "@angy/form-error";
import { AppMaterialModule } from "../app-material-module";
import { AngyFormErrorExampleComponent } from "./angy-form-error-example.component";

const exported = [AngyFormErrorExampleComponent];

@NgModule({
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, AngyFormErrorModule],
  declarations: [exported],
  exports: [exported],
})
export class AngyFormErrorExampleModule {}

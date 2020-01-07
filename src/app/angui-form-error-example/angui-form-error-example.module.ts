import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AnguiFormErrorModule } from "@angui/form-error";
import { AppMaterialModule } from "../app-material-module";
import { AnguiFormErrorExampleComponent } from "./angui-form-error-example.component";

const exported = [AnguiFormErrorExampleComponent];

const routes = [
  {
    path: "",
    component: AnguiFormErrorExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, AppMaterialModule, ReactiveFormsModule, AnguiFormErrorModule],
  declarations: [exported],
  exports: [exported],
})
export class AnguiFormErrorExampleModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppMaterialModule } from "../app-material-module";
import { LazyDialogTriggerExampleComponent } from "./lazy-dialog-trigger-example.component";

const exported = [LazyDialogTriggerExampleComponent];

const routes = [
  {
    path: "",
    component: LazyDialogTriggerExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, AppMaterialModule],
  declarations: [exported],
  exports: [exported],
})
export class LazyDialogTriggerExampleModule {}

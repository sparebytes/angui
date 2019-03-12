import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "../app-material-module";
import { LazyDialogTriggerExampleComponent } from "./lazy-dialog-trigger-example.component";

const exported = [LazyDialogTriggerExampleComponent];

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [exported],
  exports: [exported],
})
export class LazyDialogTriggerExampleModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "../app-material-module";
import { LazyDialogExampleComponent } from "./lazy-dialog-example.component";

const exported = [LazyDialogExampleComponent];

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [exported],
  entryComponents: [LazyDialogExampleComponent],
  exports: [exported],
})
export class LazyDialogExampleModule {
  static LazyDialogExampleComponent = LazyDialogExampleComponent;
}

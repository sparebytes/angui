import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppMaterialModule } from "../app-material-module";
import { LazyDialogExampleComponent } from "./lazy-dialog-example.component";

const exported = [LazyDialogExampleComponent];

const routes = [
  {
    path: "",
    component: LazyDialogExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, AppMaterialModule],
  declarations: [exported],
  entryComponents: [LazyDialogExampleComponent],
  exports: [exported],
})
export class LazyDialogExampleModule {
  static LazyDialogExampleComponent = LazyDialogExampleComponent;
}

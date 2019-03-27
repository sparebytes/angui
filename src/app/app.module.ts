import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AngyFormErrorModule } from "@angy/form-error";
import { AngyLazyDialogModule } from "projects/lazy-dialog/src/public_api";
import { AppMaterialModule } from "./app-material-module";
import { AppComponent } from "./app.component";

const routes = [
  { path: "angy-address", loadChildren: "./angy-address-example/angy-address-example.module#AngyAddressExampleModule" },
  {
    path: "angy-form-error",
    loadChildren: "./angy-form-error-example/angy-form-error-example.module#AngyFormErrorExampleModule",
  },
  { path: "angy-portal", loadChildren: "./angy-portal-example/angy-portal-example.module#AngyPortalExampleModule" },
  {
    path: "lazy-dialog-trigger",
    loadChildren: "./lazy-dialog-trigger-example/lazy-dialog-trigger-example.module#LazyDialogTriggerExampleModule",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AngyFormErrorModule.forRoot(),
    AngyLazyDialogModule.forRoot({
      LazyDialogExampleModule: "src/app/lazy-dialog-example/lazy-dialog-example.module#LazyDialogExampleModule",
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngyModule } from "@angy/angy";
import { AngyFormErrorModule } from "@angy/form-error";
import { AngyLazyDialogModule } from "projects/lazy-dialog/src/public_api";
import { AngyAddressExampleModule } from "./angy-address-example";
import { AngyFormErrorExampleModule } from "./angy-form-error-example";
import { AngyPortalExampleModule } from "./angy-portal-example";
import { AppMaterialModule } from "./app-material-module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LazyDialogTriggerExampleModule } from "./lazy-dialog-trigger-example";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    AngyModule,
    AngyPortalExampleModule,
    AngyAddressExampleModule,
    AngyFormErrorModule.forRoot(),
    LazyDialogTriggerExampleModule,
    AngyLazyDialogModule.forRoot({
      LazyDialogExampleModule: "src/app/lazy-dialog-example/lazy-dialog-example.module#LazyDialogExampleModule",
    }),
    AngyFormErrorExampleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngyModule } from "@angy/angy";
import { AppMaterialModule } from "./app-material-module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngyAddressExampleModule } from "./angy-address-example";
import { AngyPortalExampleModule } from "./angy-portal-example";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppMaterialModule, AngyModule, AngyPortalExampleModule, AngyAddressExampleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UnimiModule } from "@unimi/unimi";
import { AppMaterialModule } from "./app-material-module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UnimiAddressExampleModule } from "./unimi-address-example";
import { UnimiPortalExampleModule } from "./unimi-portal-example";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppMaterialModule, UnimiModule, UnimiPortalExampleModule, UnimiAddressExampleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

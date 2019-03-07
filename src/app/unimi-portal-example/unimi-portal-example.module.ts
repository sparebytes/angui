import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UnimiPortalModule } from "@unimi/portal";
import { AppMaterialModule } from "../app-material-module";
import { UnimiPortalExampleComponent } from "./unimi-portal-example.component";

const exported = [UnimiPortalExampleComponent];

@NgModule({
  imports: [CommonModule, AppMaterialModule, UnimiPortalModule],
  declarations: [exported],
  exports: [exported],
})
export class UnimiPortalExampleModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngyPortalModule } from "@angy/portal";
import { AppMaterialModule } from "../app-material-module";
import { AngyPortalExampleComponent } from "./angy-portal-example.component";

const exported = [AngyPortalExampleComponent];

@NgModule({
  imports: [CommonModule, AppMaterialModule, AngyPortalModule],
  declarations: [exported],
  exports: [exported],
})
export class AngyPortalExampleModule {}

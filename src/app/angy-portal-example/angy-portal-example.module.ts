import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngyPortalModule } from "@angy/portal";
import { AppMaterialModule } from "../app-material-module";
import { AngyPortalExampleChildSinkComponent } from "./angy-portal-example-child-sink.component";
import { AngyPortalExampleChildSourceComponent } from "./angy-portal-example-child-source.component";
import { AngyPortalExampleComponent } from "./angy-portal-example.component";

const exported = [AngyPortalExampleComponent, AngyPortalExampleChildSinkComponent, AngyPortalExampleChildSourceComponent];

const routes = [
  {
    path: "",
    component: AngyPortalExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, AppMaterialModule, AngyPortalModule],
  declarations: [exported],
  exports: [exported],
})
export class AngyPortalExampleModule {}

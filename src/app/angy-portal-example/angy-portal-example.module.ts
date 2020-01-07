import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AnguiPortalModule } from "@angui/portal";
import { AppMaterialModule } from "../app-material-module";
import { AnguiPortalExampleChildSinkComponent } from "./angui-portal-example-child-sink.component";
import { AnguiPortalExampleChildSourceComponent } from "./angui-portal-example-child-source.component";
import { AnguiPortalExampleComponent } from "./angui-portal-example.component";

const exported = [AnguiPortalExampleComponent, AnguiPortalExampleChildSinkComponent, AnguiPortalExampleChildSourceComponent];

const routes = [
  {
    path: "",
    component: AnguiPortalExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, AppMaterialModule, AnguiPortalModule],
  declarations: [exported],
  exports: [exported],
})
export class AnguiPortalExampleModule {}

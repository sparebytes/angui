import { PortalModule } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AnguiPortalSinkComponent } from "./angui-portal-sink.component";
import { AnguiPortalSourceDirective } from "./angui-portal-source.directive";

const directives = [AnguiPortalSourceDirective, AnguiPortalSinkComponent];

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [directives],
  exports: [directives, PortalModule],
})
export class AnguiPortalModule {}

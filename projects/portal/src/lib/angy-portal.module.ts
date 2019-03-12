import { PortalModule } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngyPortalSinkComponent } from "./angy-portal-sink.component";
import { AngyPortalSourceDirective } from "./angy-portal-source.directive";

const directives = [AngyPortalSourceDirective, AngyPortalSinkComponent];

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [directives],
  exports: [directives],
})
export class AngyPortalModule {}

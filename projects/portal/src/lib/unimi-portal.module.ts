import { PortalModule } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UnimiPortalSinkComponent } from "./unimi-portal-sink.component";
import { UnimiPortalSourceDirective } from "./unimi-portal-source.directive";

const directives = [UnimiPortalSourceDirective, UnimiPortalSinkComponent];

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [directives],
  exports: [directives],
})
export class UnimiPortalModule {}

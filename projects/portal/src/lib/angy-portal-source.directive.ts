import { TemplatePortal } from "@angular/cdk/portal";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AnguiPortalSource } from "./angui-portal-source";
import { AnguiPortalService } from "./angui-portal.service";

@Directive({ selector: "[anguiPortalSource]" })
export class AnguiPortalSourceDirective implements AnguiPortalSource, OnInit, OnDestroy {
  templatePortal: TemplatePortal<any>;
  constructor(
    private portalService: AnguiPortalService,
    readonly templateRef: TemplateRef<any>,
    readonly viewContainerRef: ViewContainerRef,
  ) {
    this.templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
  }
  ngOnInit() {
    this.portalService.add(this);
  }
  ngOnDestroy() {
    this.portalService.remove(this);
  }
  @Input("anguiPortalSource")
  portalName?: string | null;
}

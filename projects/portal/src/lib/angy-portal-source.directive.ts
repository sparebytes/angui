import { TemplatePortal } from "@angular/cdk/portal";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AngyPortalSource } from "./angy-portal-source";
import { AngyPortalService } from "./angy-portal.service";

@Directive({ selector: "[angyPortalSource]" })
export class AngyPortalSourceDirective implements AngyPortalSource, OnInit, OnDestroy {
  templatePortal: TemplatePortal<any>;
  constructor(
    private portalService: AngyPortalService,
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
  @Input("angyPortalSource")
  portalName?: string | null;
}

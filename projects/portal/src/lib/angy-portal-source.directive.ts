import { TemplatePortal } from "@angular/cdk/portal";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AngyPortalService } from "./angy-portal.service";

@Directive({ selector: "[angyPortalSource]" })
export class AngyPortalSourceDirective implements OnInit, OnDestroy {
  templatePortal: TemplatePortal<any>;
  constructor(
    private AngyPortalService: AngyPortalService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
  }
  ngOnInit() {
    this.AngyPortalService.add(this);
  }
  ngOnDestroy() {
    this.AngyPortalService.remove(this);
  }
  @Input("angyPortalSource")
  portalName: string | null = null;
}

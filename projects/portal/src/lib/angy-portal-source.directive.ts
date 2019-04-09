import { TemplatePortal } from "@angular/cdk/portal";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AngyPortalService } from "./angy-portal.service";

@Directive({ selector: "[angyPortalSource]" })
export class AngyPortalSourceDirective implements OnInit, OnDestroy {
  templatePortal: TemplatePortal<any>;
  constructor(
    private AngyPortalService: AngyPortalService,
    readonly templateRef: TemplateRef<any>,
    readonly viewContainerRef: ViewContainerRef,
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

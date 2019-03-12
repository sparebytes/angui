import { TemplatePortal } from "@angular/cdk/portal";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { UnimiPortalService } from "./unimi-portal.service";

@Directive({ selector: "[unimiPortalSource]" })
export class UnimiPortalSourceDirective implements OnInit, OnDestroy {
  templatePortal: TemplatePortal<any>;
  constructor(
    private UnimiPortalService: UnimiPortalService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
  }
  ngOnInit() {
    this.UnimiPortalService.add(this);
  }
  ngOnDestroy() {
    this.UnimiPortalService.remove(this);
  }
  @Input("unimiPortalSource")
  portalName: string | null = null;
}

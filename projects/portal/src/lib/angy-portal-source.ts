import { TemplateRef, ViewContainerRef } from "@angular/core";

export interface AngyPortalSource {
  readonly portalName?: string | null;
  readonly templateRef: TemplateRef<any>;
  readonly viewContainerRef: ViewContainerRef;
}

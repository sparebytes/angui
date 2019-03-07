import { Component, Input } from "@angular/core";
import { UnimiPortalService } from "./unimi-portal.service";

@Component({
  selector: "unimiPortalSink,unimi-portal-sink",
  template: `
    <ng-container *ngFor="let unimiPortalSourceDirective of (portalService.unimiPortalSourceDirectives$ | async)">
      <ng-container *ngIf="unimiPortalSourceDirective.portalName === portalName">
        <ng-template [cdkPortalOutlet]="unimiPortalSourceDirective.templatePortal"></ng-template>
      </ng-container>
    </ng-container>
  `,
})
export class UnimiPortalSinkComponent {
  constructor(public portalService: UnimiPortalService) {}
  @Input("unimiPortalSink")
  portalName: string | null = null;
}

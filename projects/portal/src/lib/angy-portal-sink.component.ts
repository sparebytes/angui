import { Component, Input } from "@angular/core";
import { AngyPortalService } from "./angy-portal.service";

@Component({
  selector: "angyPortalSink,angy-portal-sink",
  template: `
    <ng-container *ngFor="let angyPortalSourceDirective of (portalService.angyPortalSourceDirectives$ | async)">
      <ng-container *ngIf="angyPortalSourceDirective.portalName === portalName">
        <ng-template [cdkPortalOutlet]="angyPortalSourceDirective.templatePortal"></ng-template>
      </ng-container>
    </ng-container>
  `,
})
export class AngyPortalSinkComponent {
  constructor(public portalService: AngyPortalService) {}
  @Input("angyPortalSink")
  portalName: string | null = null;
}

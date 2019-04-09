import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { distinctUntilChanged, switchMap } from "rxjs/operators";
import { AngyPortalSourceDirective } from "./angy-portal-source.directive";
import { AngyPortalService } from "./angy-portal.service";

@Component({
  selector: "angyPortalSink,angy-portal-sink",
  template: `
    <ng-container *ngFor="let angyPortalSourceDirective of (matchedPortalSources$ | async)">
      <ng-template [cdkPortalOutlet]="angyPortalSourceDirective.templatePortal"></ng-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngyPortalSinkComponent implements OnDestroy {
  constructor(public portalService: AngyPortalService) {}

  ngOnDestroy() {
    this.portalName$.complete();
  }

  readonly portalName$ = new BehaviorSubject<string | null>(null);

  @Input("angyPortalSink")
  get portalName() {
    return this.portalName$.value;
  }
  set portalName(v: string | null) {
    this.portalName$.next(v == null ? null : v);
  }

  readonly matchedPortalSources$: Observable<AngyPortalSourceDirective[]> = this.portalName$.pipe(
    distinctUntilChanged(),
    switchMap(portalName => (portalName == null ? of([]) : this.portalService.filterByName$(portalName))),
  );
}

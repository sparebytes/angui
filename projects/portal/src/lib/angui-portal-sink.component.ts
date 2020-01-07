import { ChangeDetectionStrategy, Component, Input, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { distinctUntilChanged, switchMap } from "rxjs/operators";
import { AnguiPortalSource } from "./angui-portal-source";
import { AnguiPortalService } from "./angui-portal.service";

@Component({
  selector: "anguiPortalSink,angui-portal-sink",
  template: `
    <ng-container *ngFor="let anguiPortalSource of (matchedPortalSources$ | async)">
      <ng-template [cdkPortalOutlet]="anguiPortalSource.templatePortal"></ng-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnguiPortalSinkComponent implements OnDestroy {
  constructor(public portalService: AnguiPortalService) {}

  ngOnDestroy() {
    this.portalName$.complete();
  }

  readonly portalName$ = new BehaviorSubject<string | null>(null);

  @Input("anguiPortalSink")
  get portalName() {
    return this.portalName$.value;
  }
  set portalName(v: string | null) {
    this.portalName$.next(v == null ? null : v);
  }

  readonly matchedPortalSources$: Observable<AnguiPortalSource[]> = this.portalName$.pipe(
    distinctUntilChanged(),
    switchMap(portalName => (portalName == null ? of([]) : this.portalService.filterByName$(portalName))),
  );
}

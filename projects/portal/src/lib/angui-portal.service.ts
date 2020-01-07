import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AnguiPortalSource } from "./angui-portal-source";

@Injectable({ providedIn: "root" })
export class AnguiPortalService implements OnDestroy {
  constructor() {}
  anguiPortalSources$ = new BehaviorSubject<AnguiPortalSource[]>([]);

  ngOnDestroy(): void {
    this.anguiPortalSources$.next([]);
  }

  add(anguiPortalSource: AnguiPortalSource): void {
    this.anguiPortalSources$.next([...this.anguiPortalSources$.value, anguiPortalSource]);
  }

  remove(anguiPortalSource: AnguiPortalSource): void {
    this.anguiPortalSources$.next(this.anguiPortalSources$.value.filter(p => p !== anguiPortalSource));
  }

  filter$(predicateFn: (anguiProtalSourceDirective: AnguiPortalSource) => boolean): Observable<AnguiPortalSource[]> {
    return this.anguiPortalSources$.pipe(
      map(anguiProtalSourceDirectives =>
        anguiProtalSourceDirectives.filter(anguiProtalSourceDirective => predicateFn(anguiProtalSourceDirective)),
      ),
    );
  }

  filterByName$(portalName: string): Observable<AnguiPortalSource[]> {
    return this.filter$(anguiProtalSourceDirective => anguiProtalSourceDirective.portalName === portalName);
  }
}

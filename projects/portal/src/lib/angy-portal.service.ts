import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AngyPortalSource } from "./angy-portal-source";

@Injectable({ providedIn: "root" })
export class AngyPortalService implements OnDestroy {
  constructor() {}
  angyPortalSources$ = new BehaviorSubject<AngyPortalSource[]>([]);

  ngOnDestroy(): void {
    this.angyPortalSources$.next([]);
  }

  add(angyPortalSource: AngyPortalSource): void {
    this.angyPortalSources$.next([...this.angyPortalSources$.value, angyPortalSource]);
  }

  remove(angyPortalSource: AngyPortalSource): void {
    this.angyPortalSources$.next(this.angyPortalSources$.value.filter(p => p !== angyPortalSource));
  }

  filter$(predicateFn: (angyProtalSourceDirective: AngyPortalSource) => boolean): Observable<AngyPortalSource[]> {
    return this.angyPortalSources$.pipe(
      map(angyProtalSourceDirectives =>
        angyProtalSourceDirectives.filter(angyProtalSourceDirective => predicateFn(angyProtalSourceDirective)),
      ),
    );
  }

  filterByName$(portalName: string): Observable<AngyPortalSource[]> {
    return this.filter$(angyProtalSourceDirective => angyProtalSourceDirective.portalName === portalName);
  }
}

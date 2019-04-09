import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AngyPortalSourceDirective } from "./angy-portal-source.directive";

@Injectable({ providedIn: "root" })
export class AngyPortalService implements OnDestroy {
  constructor() {}
  angyPortalSourceDirectives$ = new BehaviorSubject<AngyPortalSourceDirective[]>([]);

  ngOnDestroy(): void {
    this.angyPortalSourceDirectives$.next([]);
  }

  add(angyPortalSourceDirective: AngyPortalSourceDirective): void {
    this.angyPortalSourceDirectives$.next([...this.angyPortalSourceDirectives$.value, angyPortalSourceDirective]);
  }

  remove(angyPortalSourceDirective: AngyPortalSourceDirective): void {
    this.angyPortalSourceDirectives$.next(this.angyPortalSourceDirectives$.value.filter(p => p !== angyPortalSourceDirective));
  }

  filter$(
    predicateFn: (angyProtalSourceDirective: AngyPortalSourceDirective) => boolean,
  ): Observable<AngyPortalSourceDirective[]> {
    return this.angyPortalSourceDirectives$.pipe(
      map(angyProtalSourceDirectives =>
        angyProtalSourceDirectives.filter(angyProtalSourceDirective => predicateFn(angyProtalSourceDirective)),
      ),
    );
  }

  filterByName$(portalName: string): Observable<AngyPortalSourceDirective[]> {
    return this.filter$(angyProtalSourceDirective => angyProtalSourceDirective.portalName === portalName);
  }
}

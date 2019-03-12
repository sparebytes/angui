import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AngyPortalSourceDirective } from "./angy-portal-source.directive";

@Injectable({ providedIn: "root" })
export class AngyPortalService implements OnDestroy {
  constructor() {}
  angyPortalSourceDirectives$ = new BehaviorSubject<AngyPortalSourceDirective[]>([]);
  ngOnDestroy() {
    this.angyPortalSourceDirectives$.next([]);
  }
  add(angyPortalSourceDirective: AngyPortalSourceDirective) {
    this.angyPortalSourceDirectives$.next([...this.angyPortalSourceDirectives$.value, angyPortalSourceDirective]);
  }
  remove(angyPortalSourceDirective: AngyPortalSourceDirective) {
    this.angyPortalSourceDirectives$.next(this.angyPortalSourceDirectives$.value.filter(p => p !== angyPortalSourceDirective));
  }
}

import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UnimiPortalSourceDirective } from "./unimi-portal-source.directive";

@Injectable({ providedIn: "root" })
export class UnimiPortalService implements OnDestroy {
  constructor() {}
  unimiPortalSourceDirectives$ = new BehaviorSubject<UnimiPortalSourceDirective[]>([]);
  ngOnDestroy() {
    this.unimiPortalSourceDirectives$.next([]);
  }
  add(unimiPortalSourceDirective: UnimiPortalSourceDirective) {
    this.unimiPortalSourceDirectives$.next([...this.unimiPortalSourceDirectives$.value, unimiPortalSourceDirective]);
  }
  remove(unimiPortalSourceDirective: UnimiPortalSourceDirective) {
    this.unimiPortalSourceDirectives$.next(this.unimiPortalSourceDirectives$.value.filter(p => p !== unimiPortalSourceDirective));
  }
}

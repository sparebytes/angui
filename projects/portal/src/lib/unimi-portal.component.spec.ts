import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UnimiPortalComponent } from "./unimi-portal.component";

describe("UnimiPortalComponent", () => {
  let component: UnimiPortalComponent;
  let fixture: ComponentFixture<UnimiPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnimiPortalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnimiPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

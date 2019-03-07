import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnimiComponent } from './unimi.component';

describe('UnimiComponent', () => {
  let component: UnimiComponent;
  let fixture: ComponentFixture<UnimiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnimiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

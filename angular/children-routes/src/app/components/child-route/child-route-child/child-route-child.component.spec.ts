import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteChildComponent } from './child-route-child.component';

describe('ChildRouteChildComponent', () => {
  let component: ChildRouteChildComponent;
  let fixture: ComponentFixture<ChildRouteChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

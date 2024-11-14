import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPendingDefectsComponent } from './my-pending-defects.component';

describe('MyPendingDefectsComponent', () => {
  let component: MyPendingDefectsComponent;
  let fixture: ComponentFixture<MyPendingDefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPendingDefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPendingDefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

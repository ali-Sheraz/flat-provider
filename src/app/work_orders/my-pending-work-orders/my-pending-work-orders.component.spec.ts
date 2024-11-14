import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPendingWorkOrdersComponent } from './my-pending-work-orders.component';

describe('MyPendingWorkOrdersComponent', () => {
  let component: MyPendingWorkOrdersComponent;
  let fixture: ComponentFixture<MyPendingWorkOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPendingWorkOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPendingWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

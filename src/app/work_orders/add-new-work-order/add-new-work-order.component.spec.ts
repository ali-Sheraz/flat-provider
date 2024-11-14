import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWorkOrderComponent } from './add-new-work-order.component';

describe('AddNewWorkOrderComponent', () => {
  let component: AddNewWorkOrderComponent;
  let fixture: ComponentFixture<AddNewWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

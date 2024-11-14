import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaystoexecuteComponent } from './daystoexecute.component';

describe('DaystoexecuteComponent', () => {
  let component: DaystoexecuteComponent;
  let fixture: ComponentFixture<DaystoexecuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaystoexecuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaystoexecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

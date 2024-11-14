import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofunitComponent } from './typeofunit.component';

describe('TypeofunitComponent', () => {
  let component: TypeofunitComponent;
  let fixture: ComponentFixture<TypeofunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeofunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuebookingsComponent } from './venuebookings.component';

describe('VenuebookingsComponent', () => {
  let component: VenuebookingsComponent;
  let fixture: ComponentFixture<VenuebookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuebookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuebookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecinctsComponent } from './precincts.component';

describe('PrecinctsComponent', () => {
  let component: PrecinctsComponent;
  let fixture: ComponentFixture<PrecinctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecinctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecinctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPrecinctsComponent } from './sub-precincts.component';

describe('SubPrecinctsComponent', () => {
  let component: SubPrecinctsComponent;
  let fixture: ComponentFixture<SubPrecinctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPrecinctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPrecinctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

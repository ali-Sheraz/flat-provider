import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsDocumentsListComponent } from './residents-documents-list.component';

describe('ResidentsDocumentsListComponent', () => {
  let component: ResidentsDocumentsListComponent;
  let fixture: ComponentFixture<ResidentsDocumentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentsDocumentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentsDocumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

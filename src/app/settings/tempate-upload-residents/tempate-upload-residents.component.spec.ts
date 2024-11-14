import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateUploadResidentsComponent } from './tempate-upload-residents.component';

describe('TempateUploadResidentsComponent', () => {
  let component: TempateUploadResidentsComponent;
  let fixture: ComponentFixture<TempateUploadResidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateUploadResidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateUploadResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

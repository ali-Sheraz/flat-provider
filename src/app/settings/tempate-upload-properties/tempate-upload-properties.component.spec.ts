import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateUploadPropertiesComponent } from './tempate-upload-properties.component';

describe('TempateUploadPropertiesComponent', () => {
  let component: TempateUploadPropertiesComponent;
  let fixture: ComponentFixture<TempateUploadPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateUploadPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateUploadPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

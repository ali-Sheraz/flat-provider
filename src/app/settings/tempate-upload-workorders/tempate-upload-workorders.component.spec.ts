import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateUploadWorkordersComponent } from './tempate-upload-workorders.component';

describe('TempateUploadWorkordersComponent', () => {
  let component: TempateUploadWorkordersComponent;
  let fixture: ComponentFixture<TempateUploadWorkordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateUploadWorkordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateUploadWorkordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

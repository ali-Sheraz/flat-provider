import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateUploadWorkflowsComponent } from './tempate-upload-workflows.component';

describe('TempateUploadWorkflowsComponent', () => {
  let component: TempateUploadWorkflowsComponent;
  let fixture: ComponentFixture<TempateUploadWorkflowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateUploadWorkflowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateUploadWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

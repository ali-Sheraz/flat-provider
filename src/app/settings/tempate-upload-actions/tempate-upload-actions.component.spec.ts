import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateUploadActionsComponent } from './tempate-upload-actions.component';

describe('TempateUploadActionsComponent', () => {
  let component: TempateUploadActionsComponent;
  let fixture: ComponentFixture<TempateUploadActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateUploadActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateUploadActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

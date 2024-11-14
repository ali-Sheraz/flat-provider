import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateUploadUserlevelComponent } from './tempate-upload-userlevel.component';

describe('TempateUploadUserlevelComponent', () => {
  let component: TempateUploadUserlevelComponent;
  let fixture: ComponentFixture<TempateUploadUserlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateUploadUserlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateUploadUserlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

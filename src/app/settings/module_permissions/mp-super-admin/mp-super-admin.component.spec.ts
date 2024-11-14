import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpSuperAdminComponent } from './mp-super-admin.component';

describe('MpSuperAdminComponent', () => {
  let component: MpSuperAdminComponent;
  let fixture: ComponentFixture<MpSuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpSuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLevelAndTaskComponent } from './user-level.component';

describe('UserLevelAndTaskComponent', () => {
  let component: UserLevelAndTaskComponent;
  let fixture: ComponentFixture<UserLevelAndTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLevelAndTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLevelAndTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

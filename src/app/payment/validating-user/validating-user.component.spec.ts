import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatingUserComponent } from './validating-user.component';

describe('ValidatingUserComponent', () => {
  let component: ValidatingUserComponent;
  let fixture: ComponentFixture<ValidatingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

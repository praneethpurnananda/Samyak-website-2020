import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamyakThemeComponent } from './samyak-theme.component';

describe('SamyakThemeComponent', () => {
  let component: SamyakThemeComponent;
  let fixture: ComponentFixture<SamyakThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamyakThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamyakThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamyakContactComponent } from './samyak-contact.component';

describe('SamyakContactComponent', () => {
  let component: SamyakContactComponent;
  let fixture: ComponentFixture<SamyakContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamyakContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamyakContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

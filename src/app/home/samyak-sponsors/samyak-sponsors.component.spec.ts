import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamyakSponsorsComponent } from './samyak-sponsors.component';

describe('SamyakSponsorsComponent', () => {
  let component: SamyakSponsorsComponent;
  let fixture: ComponentFixture<SamyakSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamyakSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamyakSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

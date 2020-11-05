import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeamComponent } from './main-team.component';

describe('MainTeamComponent', () => {
  let component: MainTeamComponent;
  let fixture: ComponentFixture<MainTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

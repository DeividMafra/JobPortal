import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedSuccessfullyComponent } from './applied-successfully.component';

describe('AppliedSuccessfullyComponent', () => {
  let component: AppliedSuccessfullyComponent;
  let fixture: ComponentFixture<AppliedSuccessfullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedSuccessfullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

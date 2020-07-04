import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobSuccessfullyComponent } from './post-job-successfully.component';

describe('PostJobSuccessfullyComponent', () => {
  let component: PostJobSuccessfullyComponent;
  let fixture: ComponentFixture<PostJobSuccessfullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostJobSuccessfullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostJobSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

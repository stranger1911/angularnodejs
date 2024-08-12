import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewlistComponent } from './interviewlist.component';

describe('InterviewlistComponent', () => {
  let component: InterviewlistComponent;
  let fixture: ComponentFixture<InterviewlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewlistComponent]
    });
    fixture = TestBed.createComponent(InterviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

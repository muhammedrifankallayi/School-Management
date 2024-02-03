import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStatusReportByClassComponent } from './student-status-report-by-class.component';

describe('StudentStatusReportByClassComponent', () => {
  let component: StudentStatusReportByClassComponent;
  let fixture: ComponentFixture<StudentStatusReportByClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentStatusReportByClassComponent]
    });
    fixture = TestBed.createComponent(StudentStatusReportByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

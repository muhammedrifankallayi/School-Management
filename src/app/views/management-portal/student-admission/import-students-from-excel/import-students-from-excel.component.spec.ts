import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStudentsFromExcelComponent } from './import-students-from-excel.component';

describe('ImportStudentsFromExcelComponent', () => {
  let component: ImportStudentsFromExcelComponent;
  let fixture: ComponentFixture<ImportStudentsFromExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportStudentsFromExcelComponent]
    });
    fixture = TestBed.createComponent(ImportStudentsFromExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

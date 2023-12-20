import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangementLoginComponent } from './mangement-login.component';

describe('MangementLoginComponent', () => {
  let component: MangementLoginComponent;
  let fixture: ComponentFixture<MangementLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangementLoginComponent]
    });
    fixture = TestBed.createComponent(MangementLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

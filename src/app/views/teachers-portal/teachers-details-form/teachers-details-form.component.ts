import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers-details-form',
  templateUrl: './teachers-details-form.component.html',
  styleUrls: ['./teachers-details-form.component.scss']
})
export class TeachersDetailsFormComponent {


  teacherForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.teacherForm = this.fb.group({
      teacherName: ['', Validators.required],
      subjectTaught: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      additionalComments: [''],
    });
  }

  submitForm() {
    if (this.teacherForm.valid) {
      // Add your form submission logic here
      console.log('Form submitted:', this.teacherForm.value);

      // Reset form if needed
      this.resetForm();
    }
  }

  resetForm() {
    this.teacherForm.reset();
  }
}

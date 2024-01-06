import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/shared/services/db.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teachers-details-form',
  templateUrl: './teachers-details-form.component.html',
  styleUrls: ['./teachers-details-form.component.scss']
})
export class TeachersDetailsFormComponent {


  teacherForm! :FormGroup

  constructor(private fb: FormBuilder,private service:DbService,private snackBar:MatSnackBar) {}

  ngOnInit() {
    this.teacherForm = new FormGroup({
   firstname:new FormControl("",[Validators.required]),
   lastname:new FormControl("",[Validators.required]),
   sex:new FormControl("",[Validators.required]),
   address:new FormControl("",[Validators.required]),
   dateofbirth:new FormControl("",[Validators.required]),
   country:new FormControl("",[Validators.required]),
   state:new FormControl("",[Validators.required]),
   district:new FormControl("",[Validators.required]),
   place:new FormControl("",[Validators.required]),
   h_qualification:new FormControl("",[Validators.required]),
   degree:new FormControl("",[Validators.required]),
   graduatedyear:new FormControl("",[Validators.required]),
   universityname:new FormControl("",[Validators.required]),
   experience:new FormControl("",[Validators.required]),
   mobile:new FormControl("",[Validators.required]),
   position:new FormControl("",[Validators.required]),
   s_subject:new FormControl("",[Validators.required]),
   m_status:new FormControl("",[Validators.required]),
   p_name:new FormControl("",[Validators.required]),
   p_occupation:new FormControl("",[Validators.required]),
    })
  }

  submitForm() {
    if (this.teacherForm.valid) {
    this.service.DbPost("teacher/teacher_details",this.teacherForm.value).subscribe((res)=>{
    this.snackBar.open("details saved successfull","ok",{duration:2000})
    })
      console.log('Form submitted:', this.teacherForm.value);

      // Reset form if needed
      this.resetForm();
    }else{
Swal.fire({
  timer:1000,
  icon:"error",
  title:"Invalid Form",
  text:"please validate the inputs !!"
})
    }
  }

  resetForm() {
    this.teacherForm.reset();
  }
}

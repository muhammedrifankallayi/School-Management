import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from 'src/app/shared/services/db.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


constructor(
  private service:DbService,
  private snackbar:MatSnackBar
  
  ){}


StudentLoginForm = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[Validators.required])
})


TeacherLoginForm = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[Validators.required])
})

ParentLoginForm = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[Validators.required])
})

submitStudent(){
if(this.StudentLoginForm.valid){
this.service.DbPost("student/login",this.StudentLoginForm.value).subscribe((res:any)=>{
  if(res.success){
    this.snackbar.open("welcome back")
    localStorage.setItem("studentToken",res.token)
  }else{
    this.snackbar.open("please try again","ok")
  }
})
}else{
  this.snackbar.open("login data invalid.please enter valid data","ok",{duration:3000})
}
}

submitTeacher(){
if(this.TeacherLoginForm.valid){
  this.service.DbPost("teacher/login",this.TeacherLoginForm.value).subscribe((res:any)=>{
    if(res.success){
      this.snackbar.open("welcome back")
      localStorage.setItem("teacherToken",res.token)
    }else{
      this.snackbar.open("please try again","ok")
    } 
  })

}else{
  this.snackbar.open("login data invalid.please enter valid data","ok",{duration:3000})
}
}

submitParent(){
if(this.ParentLoginForm.valid){
  this.service.DbPost("parent/login",this.ParentLoginForm.value).subscribe((res:any)=>{
    if(res.success){
      this.snackbar.open("welcome back")
      localStorage.setItem("parentToken",res.token)
    }else{
      this.snackbar.open("please try again")
    }
  })
}else{
  this.snackbar.open("login data invalid.please enter valid data","ok",{duration:3000})
}
}

}

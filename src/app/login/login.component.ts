import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 userForm!:FormGroup;
  errorMessage: any;
  errorStatus: boolean = false;;

 constructor(private auth:AuthenticationService){}

 ngOnInit(): void{
  this.initForm();
 }
 initForm(){
  this.userForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  })
 }
 submit(){
  if(this.userForm){
    this.auth.login(this.userForm.value).subscribe(result=>{
        console.log(result)
        this.errorStatus = false;

    },error=>{
      if(error.status == 400){
        this.errorStatus = true;
        this.errorMessage = error.error.message;
      }
    })
  }
 }

}

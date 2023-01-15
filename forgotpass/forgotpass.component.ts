import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'ngx-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent {
  msg=' '
  myForm=new FormGroup({
    // FirstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
    // LastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*")]),
    // password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]),
    // contact:new FormControl('',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]),
    // otp:new FormControl('',[Validators.required,Validators.pattern('[0-9]{ ,6}')]),
  })
 
  get fdata(){
    return this.myForm.controls;
  }
myFunction(){
    console.log("function is call")
    this.msg='Check your email Password link has been sent to your register email id'
  }

}

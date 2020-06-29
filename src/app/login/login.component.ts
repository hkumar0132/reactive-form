import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm : FormGroup = null;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.userForm  = this.fb.group(
      {
        'email' : ['', [Validators.required, Validators.email]],
        'password' : ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  get checker() {
    return this.userForm.controls;
  }

  onSubmit() {
    
    if(this.userForm.invalid) {
      alert('Invalid credentials');
    }
    else {
       alert('Sign in successful');
    }

  }

}

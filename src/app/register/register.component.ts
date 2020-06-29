import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router : Router) { }

  userForm : FormGroup = null;

  ngOnInit() {
      this.userForm = this.formBuilder.group({
          firstName : ['', Validators.required],
          lastName : ['', Validators.required],
          email : ['', [Validators.required, Validators.email]],
          password : ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
          confirmPassword : ['']
      });
  }

  get checker() { 
    return this.userForm.controls; 
  }

  onSubmit() {

      if (this.userForm.invalid) {
          alert('Please fill all the required fields correctly');
      }
      else {
          if (confirm('Congratulations ' + this.checker.firstName.value + ' , you have been registered')) {
            this.router.navigate(['login']);
          }
      }
  }

}

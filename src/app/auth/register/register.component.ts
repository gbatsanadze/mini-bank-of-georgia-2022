import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators} from '../../shared/validators.service';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  onRegister() {
    if (this.form.invalid) {
      return;
    }
    const name = this.get('name').value;
    const username = this.get('username').value;
    const password = this.get('password').value;
    this.authService.register(name, username, password).subscribe(
      (resData) => {
        console.log(resData);
        this.form.reset();
      },
      (error) => {
        this.error = error;
      }
    );
  }

  get(controlName) {
    return this.form.get(controlName);
  }

  errors(controlName) {
    return this.get(controlName)?.errors
      ? Object.values(this.get(controlName).errors)
      : [];
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      username: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^\S*$/, 'სფეისების გარეშე'),
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
    });
  }
}








// import {Component, OnInit} from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'bg-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   myForm: FormGroup;
//
//
//   ngOnInit() {
//
//     this.myForm = new FormGroup({
//       name: new FormControl('', [Validators.required,
//           Validators.pattern(/^\S*$/, ),
//           Validators.minLength(2),
//         Validators.maxLength(30)
//       ]),
//       userName: new FormControl('',
//         [Validators.required,
//           Validators.pattern(/^\S*$/, ),
//           Validators.minLength(2),
//           Validators.maxLength(30)]),
//       password: new FormControl('', [
//         Validators.required,
//         Validators.minLength(2),
//         Validators.maxLength(30),
//       ]),
//       confirmPassword: new FormControl('', [
//         Validators.required,
//         Validators.minLength(2),
//         Validators.maxLength(30),
//       ])
//     });
//   }
//
//   constructor() {
//   }
//
//
// }

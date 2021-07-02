import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup

  constructor(
    private router: Router,
    public formBulder: FormBuilder
  ) { }
  ngOnInit() {
    this.loginForm = this.formBulder.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit() {
    this.loginForm.reset()
    this.router.navigate(["/home"])
  }

}

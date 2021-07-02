import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup

  constructor(
    private router: Router,
    public formBulder: FormBuilder
  ) { }
  ngOnInit() {
    this.registerForm = this.formBulder.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit() {
    this.registerForm.reset()
    this.router.navigate(["/home"])
  }
}

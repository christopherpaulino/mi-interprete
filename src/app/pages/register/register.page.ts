import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup

  constructor(
    private router: Router,
    public formBulder: FormBuilder,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.registerForm = this.formBulder.group({
      email: [''],
      password: ['']
    })
    this.authService.checkEmailVerified()
  }

  async onSubmit() {
    try {

      if (this.registerForm.valid) {
        const { email, password } = this.registerForm.getRawValue();
        const user = await this.authService.register(email, password)

        this.registerForm.reset()
        if (user) {
          this.router.navigate(['/email-validator'])
        }

      }
    } catch (err) {
      console.log(err);

    }
  }
}

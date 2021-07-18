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
    console.log("register");
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
          // this.router.navigate(['complete-register/', user.uid])
          // this.authService.createUserData(user as UserInformation)
        }

      }
    } catch (err) {
      console.log(err);

    }
  }
}

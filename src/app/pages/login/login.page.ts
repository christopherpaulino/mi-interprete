import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { authError } from 'src/app/shared/utils/firebase.errors';
import { AuthService } from '../../services/auth.service';
import { errorForRegister } from '../../shared/utils/firebase.errors';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup

  constructor(
    private router: Router,
    public formBulder: FormBuilder,
    private authService: AuthService,
    public alertController: AlertController
  ) { }
  ngOnInit() {
    console.log("Login");

    this.loginForm = this.formBulder.group({
      username: [''],
      password: ['']
    })
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.getRawValue()
      try {
        const user = await this.authService.login(username, password)
        console.log(user)
        if (user) {
          this.router.navigate(['/home'])
        }
      }
      catch (err) {

        await this.showErrorAlert(err)
      }
    }
  }

  async showErrorAlert(errorCode: string) {
    const message = authError(errorCode)

    const actionButton = errorCode == errorForRegister ? {
      text: "Registrarme", handler: () => { this.router.navigate(['/register']) }
    } : {
      text: "Aceptar"
    }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención!',
      message: '<strong>' + message + '</strong>!',
      buttons: [
        actionButton
      ]
    });

    await alert.present();
  }

  async loginGoogle() {

    try {
      const user = await this.authService.loginGoogle()
      if (user) {
        console.log(user);

      }
    } catch (err) {
      console.log(err);

    }

  }

}


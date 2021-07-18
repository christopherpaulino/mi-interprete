import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from '../../services/auth.service';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.page.html',
  styleUrls: ['./email-validator.page.scss'],
})
export class EmailValidatorPage implements OnInit {

  user: User

  constructor(
    private authService: AuthService,
    public router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadUser()
  }

  async resendVerificationCode() {
    this.authService.sendVerifcationEmail().then(
      async () => {
        const alert = await this.alertController.create(
          {
            message: "Correo de verificación reenviado a la dirección: <br>" + this.user.email,
            header: "Correo Enviado",
            buttons: [
              {
                text: "Aceptar"
              }
            ]
          }
        )
      }

    )
  }

  loadUser() {
    this.authService.user$.pipe(take(1)).subscribe(
      res => {
        if (res) {
          this.user = res

          if (res.emailVerified) {
            this.router.navigate(['/home'])
          }
        }
        else {
          this.router.navigate(['/login'])
        }
      }
    )
  }

  validate() {
    try {
      this.authService.checkEmailVerified().then(
        async (isVerified) => {
          if (isVerified) {
            this.router.navigate(['/home'])
          } else {
            const alert = await this.alertController.create(
              {
                message: "Ingrese a su correo y haga click en el enlace de verificación.",
                header: "Correo no verificado",
                buttons: [
                  {
                    text: "Reintentar",
                    handler: () => {
                      this.authService.checkEmailVerified()
                      this.loadUser()
                    }
                  },
                  {
                    text: "Aceptar",
                    role: "cancel"
                  }
                ]
              }
            )
            await alert.present()
          }
        }
      )
    } catch (err) {

    }
  }


}

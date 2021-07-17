import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthService,
    public router: Router
  ) {
    this.authService.user$.subscribe(
      res => {
        if (res) {
          if (!res.emailVerified) {
            this.router.navigate(['/email-validator'])
          } else if (res.firstLogin) {
            this.router.navigate(['/complete-register'])
          }
        }
      }
    )
  }

  ngOnInit() {

  }

  printSelected(ev) {
    console.log(ev);

  }

}

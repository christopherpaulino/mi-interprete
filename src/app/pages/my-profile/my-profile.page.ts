import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  user: User
  isDataLoaded: boolean = false

  constructor(private authService: AuthService,
    public router: Router) {
    this.authService.user$.subscribe(
      res => {
        if (res) {
          this.user = res
          this.isDataLoaded = true
        }
      }
    )
  }

  ngOnInit() {

  }

  editProfile() {
    this.router.navigate(['/complete-register', this.user.uid])
  }

  logout() {
    this.authService.logout().then(
      () => {
        this.router.navigate(['/login'])
      }
    )
  }
}

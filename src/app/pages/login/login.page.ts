import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }
  loginForm: FormsModule
  ngOnInit() {
  }

}

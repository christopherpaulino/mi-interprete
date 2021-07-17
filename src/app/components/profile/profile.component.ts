import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/user.interface';
import { Interpreter } from '../../shared/interpreters.interface';
import { element } from 'protractor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {

  @Input() user: User;

  @Input() interpreter: Interpreter;

  @Input() isInterpreter: boolean;

  userData: User

  constructor() {
  }

  getUser(): User {
    return this.isInterpreter ? this.interpreter.user : this.user
  }

  ngOnInit() {
  }

}

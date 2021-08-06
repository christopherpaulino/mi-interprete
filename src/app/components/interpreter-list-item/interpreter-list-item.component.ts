import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Interpreter } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interpreter-list-item',
  templateUrl: './interpreter-list-item.component.html',
  styleUrls: ['./interpreter-list-item.component.scss']
})
export class InterpreterListItemComponent implements OnInit {

  @Input() interpreter: Interpreter;


  constructor(public router: Router) { }

  ngOnInit() { }

  onClick() {
    this.router.navigate(['home/interpreter/profile', this.interpreter.$key])
  }


}

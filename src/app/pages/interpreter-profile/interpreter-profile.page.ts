import { Component, OnInit } from '@angular/core';
import { InterpreterService } from '../../services/interpreter.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Interpreter } from '../../shared/interpreters.interface';

@Component({
  selector: 'app-interpreter-profile',
  templateUrl: './interpreter-profile.page.html',
  styleUrls: ['./interpreter-profile.page.scss'],
})
export class InterpreterProfilePage implements OnInit {

  interpreter: Interpreter;
  id: string;
  dataLoaded: boolean = false

  constructor(private interpreterService: InterpreterService,
    route: ActivatedRoute) {
    this.id = route.snapshot.params.id
    this.interpreterService.getInterpreterById(this.id).then(
      res => {
        this.interpreter = res
        this.dataLoaded = true
        console.log(this.interpreter);
      }
    )
  }

  contact() {

  }

  ngOnInit() {
  }

}

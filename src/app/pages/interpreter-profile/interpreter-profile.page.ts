import { Component, OnInit } from '@angular/core';
import { InterpreterService } from '../../services/interpreter.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Interpreter } from '../../shared/interfaces';

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
    public route: ActivatedRoute, public router: Router) {
    this.id = route.snapshot.params.id
    this.interpreterService.getInterpreterById(this.id).then(
      res => {
        this.interpreter = res
        this.dataLoaded = true
        console.log(this.interpreter);
      }
    )
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Interpreter } from 'src/app/shared/interpreters.interface';
import { InterpreterService } from '../../services/interpreter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interpreter-list',
  templateUrl: './interpreter-list.page.html',
  styleUrls: ['./interpreter-list.page.scss'],
})
export class InterpreterListPage implements OnInit {

  interpreters: Interpreter[]
  constructor(
    private interpreterService: InterpreterService,
    public router: Router
  ) { }

  ngOnInit() {

    this.interpreterService.getInterpreterList().subscribe(res => {
      this.interpreters = res.map(t => {
        console.log(res)
        return {
          $key: t.payload.doc.id,
          ...t.payload.doc.data() as Interpreter
        }
      })
    })
  }

}

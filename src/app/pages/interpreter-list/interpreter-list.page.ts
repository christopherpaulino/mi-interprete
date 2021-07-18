import { Component, OnInit } from '@angular/core';
import { Interpreter } from 'src/app/shared/interfaces';
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

    this.interpreterService.getInterpreterList().then(
      res => {
        if (res && res.length > 0)
          console.log(res);

        this.interpreters = res
      }
    )
  }

  goToProfile(id: string) {
    this.router.navigate(['/home/interpreter/profile', id])
  }

}

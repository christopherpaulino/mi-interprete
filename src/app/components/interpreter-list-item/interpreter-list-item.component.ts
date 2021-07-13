import { Component, Input, OnInit } from '@angular/core';
import { Interpreter } from 'src/app/shared/interpreters.interface';

@Component({
  selector: 'app-interpreter-list-item',
  templateUrl: './interpreter-list-item.component.html',
  styleUrls: ['./interpreter-list-item.component.scss']
})
export class InterpreterListItemComponent implements OnInit {

  @Input() interpreter: Interpreter

  constructor() { }

  ngOnInit() { }


  getRateDescription(): String {
    const rate = this.interpreter.review
    switch (true) {
      case (rate <= 1): {
        return "Novato"
      }
      case (rate > 1 && rate <= 2): {
        return "Regular"
      }
      case (rate > 2 && rate <= 3): {
        return "Bueno"
      }
      case (rate > 3 && rate <= 4): {
        return "Novato"
      }
      case (rate > 4): {
        return "Experto"
      }
    }
  }

}

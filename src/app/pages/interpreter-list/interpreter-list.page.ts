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
  filteredList: Interpreter[]

  selectedItem: string = "all"

  constructor(
    private interpreterService: InterpreterService,
    public router: Router
  ) {
    this.loadList(this.selectedItem)
  }

  ngOnInit() { }

  onTabChange($event) {
    this.loadList($event)
  }

  loadList(filter?: string) {
    this.interpreters = []
    this.filteredList = []
    this.interpreterService.getInterpreterList(filter).then(
      res => {
        if (res && res.length > 0)
          this.interpreters = res
        this.filteredList = this.interpreters
      }
    )
  }

  onSearchChange($event) {
    let criteria: string = $event.target.value.toLowerCase()
    if (criteria.length > 0) {
      this.filteredList = this.interpreters.filter(i => (i.user.city.toLowerCase().includes(criteria) || i.user.fullName.toLowerCase().includes(criteria)))
      console.log($event.target.value);
    } else {
      this.cancelFilter()
    }


  }
  cancelFilter() {
    this.filteredList = this.interpreters
  }
}

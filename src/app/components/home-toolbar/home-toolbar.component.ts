import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss'],
})
export class HomeToolbarComponent implements OnInit {

  @Input() title: any
  @Input() router: Router
  constructor() { }

  ngOnInit() { }

  goToProfile() {
    this.router.navigate(['/home/profile'])
  }

}

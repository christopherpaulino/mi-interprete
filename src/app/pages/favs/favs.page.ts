import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}

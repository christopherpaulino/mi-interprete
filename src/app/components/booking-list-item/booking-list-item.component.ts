import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list-item',
  templateUrl: './booking-list-item.component.html',
  styleUrls: ['./booking-list-item.component.scss'],
})
export class BookingListItemComponent implements OnInit {

  @Input() booking: Booking;

  constructor(public router: Router) { }

  ngOnInit() { }

  onClick() {
    this.router.navigate(['home/messages/details', this.booking.$key])
  }

}

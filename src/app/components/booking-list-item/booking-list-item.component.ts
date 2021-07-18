import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../shared/interfaces';

@Component({
  selector: 'app-booking-list-item',
  templateUrl: './booking-list-item.component.html',
  styleUrls: ['./booking-list-item.component.scss'],
})
export class BookingListItemComponent implements OnInit {

  @Input() booking: Booking;
  constructor() { }

  ngOnInit() { }

}

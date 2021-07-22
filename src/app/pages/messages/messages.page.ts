import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../shared/interfaces';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  bookings: Booking[] = []
  hasData: boolean = false

  constructor(public router: Router,
    private bookingsService: BookingService) {
    this.loadBookings()
  }

  ngOnInit() {
  }

  loadBookings() {
    this.bookingsService.getMyBookings().then(
      res => {
        if (res && res.length > 0) {
          this.hasData = true
          this.bookings = res
        }
      }
    ).catch(
      error => console.log(error))
  }
}

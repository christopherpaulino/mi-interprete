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

  selectedList: string = "pending"
  bookings: Booking[] = []
  hasData: boolean = false

  constructor(public router: Router,
    private bookingsService: BookingService) {
    this.loadBookings()
  }

  ngOnInit() {
  }

  change($event) {
    this.selectedList = $event
    this.loadBookings()
  }
  loadBookings() {
    this.bookings = []
    let status = this.selectedList == "accepted";

    this.bookingsService.getMyBookings(status).then(
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

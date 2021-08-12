import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { Booking, Interpreter } from '../../../shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InterpreterService } from '../../../services/interpreter.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {

  booking: Booking
  interpreter: Interpreter
  hasLoaded: boolean = false
  id: string

  bookingForm: FormGroup
  constructor(private bookingService: BookingService,
    private interpreterService: InterpreterService,
    private route: ActivatedRoute, private formBuilder: FormBuilder,
    private router: Router) {
    this.id = this.route.snapshot.params.id
    this.bookingForm = this.formBuilder.group([

    ])
    this.loadData()
  }

  ngOnInit() {
  }

  loadData() {
    this.bookingService.getBookingById(this.id).subscribe(
      res => {
        this.booking = { $key: this.id, ...res as Booking }
        this.loadInterpreter()
      }
    )
  }

  sendByWhatsapp() {
    const message = "Hola que tal"
    window.open("https://www.w3schools.com/php/", '_system', 'location=yes');
    this.router.navigateByUrl(`wa.me/${this.interpreter.user.phone}?text=${message}`)
  }
  loadInterpreter() {
    this.interpreterService.getInterpreterById(this.booking.interpreter_id).then(
      res => {
        this.interpreter = res
        this.hasLoaded = true
      }
    )
  }

  goToProfile() {
    this.router.navigate([`/home/interpreter/profile/${this.interpreter.$key}`])
  }

}

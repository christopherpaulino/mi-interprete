import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Booking, City } from '../../shared/interfaces';
import { BookingService } from '../../services/booking.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-booking-interpreter',
  templateUrl: './booking-interpreter.page.html',
  styleUrls: ['./booking-interpreter.page.scss'],
})
export class BookingInterpreterPage implements OnInit {

  bookingForm: FormGroup
  id: string
  cities: City[]

  constructor(private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private cityService: CitiesService,
    public route: ActivatedRoute,
    private router: Router) {
    this.id = this.route.snapshot.params.id
    this.loadCities()

  }

  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      title: [''],
      date: [''],
      description: [''],
      hour: [''],
      city: ['']
    })
  }

  loadCities() {
    this.cityService.getCities().subscribe(res => {
      this.cities = res.map(t => {
        return {
          $key: t.payload.doc.id,
          ...t.payload.doc.data() as City
        }
      })
    }
    )
  }

  postBooking() {
    const booking: Booking = this.bookingForm.getRawValue()

    booking.interpreter_id = this.id

    if (this.bookingForm.valid) {
      console.log(booking);

      this.bookingService.postBooking(booking).then(
        res => this.router.navigate(['/home/messages'])
      )
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Booking, City, Language, Interpreter } from '../../shared/interfaces';
import { BookingService } from '../../services/booking.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from '../../services/cities.service';
import { LanguageService } from '../../services/language.service';
import { InterpreterService } from '../../services/interpreter.service';

@Component({
  selector: 'app-booking-interpreter',
  templateUrl: './booking-interpreter.page.html',
  styleUrls: ['./booking-interpreter.page.scss'],
})
export class BookingInterpreterPage implements OnInit {

  bookingForm: FormGroup
  id: string
  cities: City[]
  languages: string[]
  interpreter: Interpreter

  constructor(private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private cityService: CitiesService,
    private interpreterService: InterpreterService,
    public route: ActivatedRoute,
    private router: Router) {
    this.id = this.route.snapshot.params.id
    this.loadCities()

    this.loadData()

  }

  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      title: [''],
      date: [''],
      description: [''],
      hour: [''],
      city: [''],
      languageFrom: [''],
      languageTo: ['']
    })
  }
  loadData() {
    this.interpreterService.getInterpreterById(this.id).then(
      res => {
        this.interpreter = res
        this.languages = this.interpreter.languages
      }
    )
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

      this.bookingService.postBooking(booking).then(
        res => this.router.navigate(['/home/messages'])
      )
    }

  }

}

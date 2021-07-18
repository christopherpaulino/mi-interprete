import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Booking } from '../shared/interfaces';
import { AuthService } from './auth.service';
import { error } from '@angular/compiler/src/util';
import { InterpreterService } from './interpreter.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private db: AngularFirestore,
    private authService: AuthService,
    private interpreterService: InterpreterService) { }

  postBooking(booking: Booking) {
    return new Promise<void>((resolve, reject) => {
      try {
        this.interpreterService.getInterpreterById(booking.interpreter_id).then(
          interpreter => {
            booking.interpreter = interpreter
            this.authService.user$.subscribe(res => {
              if (res) {
                booking.user_id = res.uid
                booking.user = res
                this.db.collection('bookings').add(booking).then(
                  res => {
                    resolve()
                  }
                )
              }
            })
          }
        )


      } catch (error) {
        resolve(error)
      }
    })
  }

  getMyBookings() {
    return new Promise<Booking[]>((resolve, reject) => {
      try {
        const bookings: Booking[] = []
        this.authService.user$.subscribe(
          res => {
            if (res) {
              this.db.collection('bookings').ref.where('user_id', "==", res.uid).get().then(
                values => {
                  values.forEach(doc => {
                    bookings.push({
                      ...doc.data() as Booking
                    })
                  })
                  resolve(bookings)
                }
              )
            }
          }
        )
      } catch (error) {
        reject(error)
      }

    })
  }

}

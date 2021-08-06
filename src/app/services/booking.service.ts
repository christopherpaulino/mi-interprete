import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Booking, User } from '../shared/interfaces';
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
                booking.status = false
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

  getBookingById(id: string) {
    return this.db.collection('bookings').doc(id).valueChanges()
  }

  getMyBookings(status: boolean) {
    return new Promise<Booking[]>(async (resolve, reject) => {
      try {
        const bookings: Booking[] = []
        const user: User = await this.authService.getMyUser()

        await this.db.collection('bookings').ref.where('user_id', "==", user.uid).where('status', '==', status).get().then(
          values => {
            values.forEach(doc => {
              bookings.push({
                $key: doc.id,
                ...doc.data() as Booking
              })
            })
          }
        )

        await bookings.map(async (i) => {
          i.interpreter = await this.interpreterService.getInterpreterById(i.interpreter_id);
        })
        resolve(bookings)

      } catch (error) {
        reject(error)
      }

    })
  }

}

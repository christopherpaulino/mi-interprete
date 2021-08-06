import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private db: AngularFirestore) {
  }

  getEvents() {
    return this.db.collection('events').snapshotChanges()
  }
}

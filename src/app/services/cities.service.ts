import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { error } from '@angular/compiler/src/util';
import { City } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private db: AngularFirestore) {
  }

  getCities() {
    return this.db.collection('cities').snapshotChanges()
  }

  getCityById(id: string) {
    return this.db.collection('cities').doc(id).valueChanges()
  }

}

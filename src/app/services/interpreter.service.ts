import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {

  constructor(
    private db: AngularFirestore,
    private router: Router
  ) { }

  getInterpreterList() {
    return this.db.collection('interpreter').snapshotChanges();
  }
}

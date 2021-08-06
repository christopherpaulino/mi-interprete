import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private db: AngularFirestore) {
  }

  getLanguages() {
    return this.db.collection('languages').ref.orderBy("name", "asc").get()
  }
}

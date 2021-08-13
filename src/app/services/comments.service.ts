import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comments } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private db: AngularFirestore) { }

  getCommentsById(id: string) {
    return this.db.collection('comments').ref.where("interpreter", "==", id).get()
  }

  saveComment(comment: Comments) {
    return this.db.collection('comments').add(comment)
  }
}

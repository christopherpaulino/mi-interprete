import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { error } from '@angular/compiler/src/util';
import { Interpreter } from '../shared/interpreters.interface';
import { User } from '../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {

  intepreters: Interpreter[] = []
  constructor(
    private db: AngularFirestore,
    private router: Router,
    private authServicer: AuthService
  ) { }

  getInterpreterList() {
    return new Promise<Interpreter[]>((resolve, reject) => {
      try {

        this.db.collection('interpreter').snapshotChanges().subscribe(
          res => {
            this.intepreters = res.map(t => {
              const interpreter: Interpreter = {
                $key: t.payload.doc.id,
                ...t.payload.doc.data() as Interpreter
              }

              const item = t.payload.doc.data()

              this.authServicer.getUserById(item['user_id']).subscribe(
                (user) => {
                  const userData: User = { uid: user['uid'], ...user as User }
                  interpreter.user = userData

                }
              )
              return interpreter
            }
            )
            resolve(this.intepreters)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  getInterpreterById(id: string) {
    return new Promise<Interpreter>((resolve, reject) => {
      try {
        this.db.collection('interpreter').doc(id).valueChanges().subscribe(
          res => {
            const interpreter: Interpreter = {
              $key: id,
              ...res as Interpreter
            }
            this.authServicer.getUserById(interpreter.user_id).subscribe(
              user => {
                const userData: User = { uid: user['uid'], ...user as User }
                interpreter.user = userData

                resolve(interpreter)
              }
            )
          }
        )
      } catch (error) {
        resolve(error)
      }
    })
  }
}

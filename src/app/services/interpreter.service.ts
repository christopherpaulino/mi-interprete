import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { error } from '@angular/compiler/src/util';
import { Interpreter, User } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {


  constructor(
    private db: AngularFirestore,
    private router: Router,
    private authServicer: AuthService
  ) { }

  registerInterpreter(interpreter: Interpreter) {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        let userFromDB: User = await this.authServicer.getMyUser()

        interpreter.user_id = userFromDB.uid,
          interpreter.user = userFromDB
        userFromDB.isInterpreter = true
        await this.authServicer.updateUserData(userFromDB)

        interpreter.connected = true;
        interpreter.review = 0
        interpreter.worksDone = 0

        this.db.collection('interpreter').doc(userFromDB.uid).set(interpreter).then(
          res => {
            resolve(true)
          }
        )
      } catch (error) {
        reject(error)
      }

    })
  }

  getInterpreterList(filter?: string) {
    let intepreters: Interpreter[] = []
    return new Promise<Interpreter[]>(async (resolve, reject) => {

      try {
        let userFromDB: User = await this.authServicer.getMyUser()
        const collection = this.db.collection('interpreter').ref

        let query: Promise<QuerySnapshot<any>>
        switch (filter) {
          case "availables":
            query = collection.where("connected", "==", true).get()
            break;

          case "experts":
            query = collection.where("review", ">=", 4).get()
            break;

          case "all":
            query = collection.get()
            break;

          default:
            query = collection.get()
            break;
        }
        query.then(
          res => {
            res.forEach(t => {
              const interpreter: Interpreter = {
                $key: t.id,
                ...t.data() as Interpreter
              }
              const item = t.data()

              this.authServicer.getUserById(item['user_id']).subscribe(
                (user) => {
                  const userData: User = { uid: user['uid'], ...user as User }
                  interpreter.user = userData
                }
              )
              intepreters.push(interpreter)
            }
            )
            resolve(intepreters.filter(i => (i.user_id != userFromDB.uid)))
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
              })
          }
        )
      } catch (error) {
        resolve(error)
      }
    })
  }
}



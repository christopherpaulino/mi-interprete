import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { UserInformation } from '../shared/user.information.interface';
import { authError } from '../shared/utils/firebase.errors';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User>;

  constructor(public firebaseAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    this.user$ = this.firebaseAuth.authState.pipe(
      switchMap((user) => {
        console.log("load User");
        if (user) {
          //this.updateEmailValidate(user.uid, user.emailVerified)
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  checkEmailVerified() {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const authUser = await this.firebaseAuth.currentUser
        if (authUser) {
          await this.afs.collection('users').doc<User>(authUser.uid).valueChanges().pipe(take(1)).subscribe(
            res => {
              this.updateEmailValidate(res.uid, res.emailVerified)
              resolve(res.emailVerified)
            }, err => {
              reject(err)
            }
          )
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.firebaseAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', authError(error.code));
    }
  }

  async register(email: string, password: string): Promise<User> {
    console.log("Register");
    try {
      const { user } = await (await this.firebaseAuth.createUserWithEmailAndPassword(email, password));
      await this.createUserData(user)
      await this.sendVerifcationEmail();
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  login(pEmail: string, password: string) {
    console.log("login");
    return new Promise<User>(async (resolve, reject) => {
      try {
        const { user } = await this.firebaseAuth.signInWithEmailAndPassword(pEmail, password);
        const { email, emailVerified, uid, displayName } = user
        const userData = { email, emailVerified, uid, displayName }

        this.updateUserData(userData);
        resolve(user);
      } catch (error) {
        console.log(error);

        reject(error.code);
      }
    })
  }

  async sendVerifcationEmail(): Promise<void> {
    console.log("Send Email");
    try {
      return (await this.firebaseAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.firebaseAuth.signOut();
    } catch (error) {
      console.log('Error->', error['t']);
    }
  }

  async createUserData(user: User) {
    console.log("createUSer");
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      firstLogin: true
    };
    await this.afs.collection('users').doc(user.uid).set(data)
  }

  updateUserData(user: User, id?: string) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        if (id) { user.uid = id }
        const data: User = user

        if (user.displayName) {
          data.displayName = user.displayName
        }
        data.firstLogin = false

        this.afs.collection('users').doc(user.uid).update(data).then(
          () => {
            resolve()
          }
        )



      } catch (error) {
        reject(error)
      }
    })

  }


  private updateEmailValidate(uid: string, isValidated: boolean) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data: User = {
      uid: uid,
      emailVerified: isValidated
    };

    return userRef.set(data, { merge: true });
  }

  getUserById(id: string) {
    return this.afs.collection('users').doc(id).valueChanges()
  }
}
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Slides } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(private db: AngularFirestore) { }

  getSlidesByScreen(screen: string) {
    return new Promise<Slides[]>((resolve, reject) => {
      try {
        let slides: Slides[] = []
        const ref = this.db.collection('slides').ref.where("screen", "==", screen).get().then(
          res => {
            res.forEach(t => {
              slides.push({
                $key: t.id,
                ...t.data() as Slides
              })
            })
            resolve(slides.sort((a, b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0)))
          }
        ).catch(err => reject(err))
      } catch (error) {
        reject(error)
      }
    })
  }
}

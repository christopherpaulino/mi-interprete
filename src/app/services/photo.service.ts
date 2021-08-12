import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { AuthService } from './auth.service';



@Injectable({
    providedIn: 'root',
})
export class PhotoService {

    constructor(private firebaseStorage: AngularFireStorage, private authService: AuthService) { }


    public async addNewToGallery(id: string) {
        // Take a photo
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri, // file-based data; provides best performance
            source: CameraSource.Camera, // automatically take a new photo with the camera
            quality: 100, // highest quality (0 to 100)
        });

        const fileName = id + '.jpeg';
        // const savedFile = await Filesystem.writeFile({
        //     path: fileName,
        //     data: base64Data,
        //     directory: Directory.Data,
        // });
        var refPath = 'profiles/' + fileName

        var ref = this.firebaseStorage.ref(refPath)

        const response = await fetch(capturedPhoto.webPath!);
        const blob = await response.blob();

        const task = await this.firebaseStorage.upload(refPath, blob)

        task.ref.getDownloadURL().then(
            value => {
                this.authService.updateUserPhoto(id, value)
            }
        )
    }
}
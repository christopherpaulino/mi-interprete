import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, City, GENDERS } from 'src/app/shared/interfaces';
import { AuthService } from '../../services/auth.service';
import { CitiesService } from '../../services/cities.service';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.page.html',
  styleUrls: ['./complete-register.page.scss'],
})
export class CompleteRegisterPage implements OnInit {

  completeRegisterForm: FormGroup
  id: any
  cities: City[]
  user: User
  genders = GENDERS


  constructor(
    private router: Router,
    public formBulder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private cityService: CitiesService,
    public photoService: PhotoService
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.authService.user$.subscribe(
      res => {
        if (res) {
          this.user = res
          this.loadCities()

          this.completeRegisterForm.patchValue(res)
        }
      }
    )

  }
  ngOnInit() {
    this.completeRegisterForm = this.formBulder.group({
      fullName: [''],
      phone: [''],
      city: [''],
      dateBirth: [''],
      gender: ['']
    })
    this.loadCities()
  }

  loadForm() {

  }

  loadCities() {
    this.cityService.getCities().subscribe(res => {
      this.cities = res.map(t => {
        return {
          $key: t.payload.doc.id,
          ...t.payload.doc.data() as City
        }
      })
    }
    )
  }

  async onSubmit() {
    try {

      if (this.completeRegisterForm.valid) {
        this.authService.updateUserData(this.completeRegisterForm.getRawValue(), this.user.uid, true).then(
          () => {
            this.router.navigate(['/home/interpreters'])
          }
        )


      }
    } catch (err) {
      console.log(err);

    }
  }
}
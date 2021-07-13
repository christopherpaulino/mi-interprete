import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/user.interface';
import { AuthService } from '../../services/auth.service';
import { UserInformation } from '../../shared/user.information.interface';
import { CitiesService } from '../../services/cities.service';
import { City } from '../../shared/city.interface';
import { element } from 'protractor';

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.page.html',
  styleUrls: ['./complete-register.page.scss'],
})
export class CompleteRegisterPage implements OnInit {

  completeRegisterForm: FormGroup
  id: any
  cities: City[]
  actualCity: City
  user: User


  constructor(
    private router: Router,
    public formBulder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private cityService: CitiesService
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.authService.user$.subscribe(
      res => {
        if (res) {
          this.user = res
          this.loadCities()
          this.completeRegisterForm = this.formBulder.group({
            fullName: [res['fullName']],
            phone: [res['phone']],
            dateBirth: [res['dateBirth']],
            city: [res['city']]
          })
        }
      }
    )

  }
  ngOnInit() {
    this.completeRegisterForm = this.formBulder.group({
      fullName: [''],
      phone: [''],
      city: [''],
      dateBirth: ['']
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
    if (this.user.city) {
      this.cityService.getCityById(this.user.city).subscribe(
        res => {
          console.log(this.user.city);
          this.actualCity = res as City
        }
      )
    } else {
      this.actualCity = this.cities[0]
    }

  }

  async onSubmit() {
    try {

      if (this.completeRegisterForm.valid) {
        this.authService.updateUserData(this.completeRegisterForm.getRawValue(), this.user.uid)

        this.router.navigate(['/home/profile'])
      }
    } catch (err) {
      console.log(err);

    }
  }
}
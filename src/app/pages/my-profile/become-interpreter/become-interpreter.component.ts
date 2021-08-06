import { Component, OnInit } from '@angular/core';
import { Interpreter, Language, Slides } from 'src/app/shared/interfaces';
import { SlideService } from '../../../services/slide.service';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { LanguageService } from '../../../services/language.service';
import { BookingListItemComponent } from '../../../components/booking-list-item/booking-list-item.component';
import { InterpreterService } from '../../../services/interpreter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-become-interpreter',
  templateUrl: './become-interpreter.component.html',
  styleUrls: ['./become-interpreter.component.scss'],
})
export class BecomeInterpreterComponent implements OnInit {

  slides: Slides[] = []
  hasData: boolean = false;
  languages: Language[] = [];


  registerForm: FormGroup
  constructor(private slidesService: SlideService,
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private interpreterService: InterpreterService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      aboutMe: [''],
      languages: [''],
      accepted: [false, BecomeInterpreterComponent.mustBeTruthy]
    })
    this.loadData()
    this.loadLanguajes()

  }

  ngOnInit() { }

  loadData() {
    this.slidesService.getSlidesByScreen("becomeInterpreter").then(
      res => {
        this.slides = res
        this.hasData = true
      }
    )
  }

  loadLanguajes() {
    this.languageService.getLanguages().then(
      res => {
        this.languages = res.docs.map(t => {
          return {
            $key: t.id,
            ...t.data() as Language
          }
        })
      }
    )
  }

  onSubmit() {
    this.interpreterService.registerInterpreter(this.registerForm.getRawValue() as Interpreter).then(
      res => {
        if (res) {
          this.router.navigate(['home/profile'])
        }
      }
    )

  }

  static mustBeTruthy(c: AbstractControl): { [key: string]: boolean } {
    let rv: { [key: string]: boolean } = {};
    if (!c.value) {
      rv['notChecked'] = true;
    }
    return rv;
  }
}

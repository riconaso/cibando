import { formatPercent } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //per il form react
import { CustomValidator } from '../customValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

form = new FormGroup({
  name: new FormControl('', Validators.required), //Le virgolette sono il valore di default che possiamo dare al campo //VALIDATORS, VALIDATORS COMPOS PIù VALIDAZIONI RACCHIUDERE DA []
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
  ripetiPassword: new FormControl('', Validators.required),
  accetto: new FormControl('', Validators.requiredTrue),
},
[CustomValidator.MatchValidator('password', 'ripetiPassword')]
);

  // onSubmit(form: any){ per il form template il primo form
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.form.value);
  }

}


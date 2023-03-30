import { formatPercent } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //per il form react

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

form = new FormGroup({
  name: new FormControl('', Validators.required), //Le virgolette sono il valore di default che possiamo dare al campo //VALIDATORS, VALIDATORS COMPOS PIù VALIDAZIONI RACCHIUDERE DA []
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  ripetiPassword: new FormControl('', Validators.required),
  accetto: new FormControl('', Validators.requiredTrue),
});

  // onSubmit(form: any){ per il form template il primo form
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.form.value);
  }

}


import { formatPercent } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //per il form react
import { CustomValidator } from '../customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor (private userService: UserService, private router: Router){}


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
   // console.log(this.form.value);
   const user = {
    name: this.form.value.name,
    email: this.form.value.email
   }

   this.userService.datiUtente.next(user);

   //this.router.navigate(['home']);
  }

}


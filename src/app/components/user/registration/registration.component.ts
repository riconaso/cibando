import { formatPercent } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //per il form react
import { CustomValidator } from '../customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  utenteInserito: any;

  Editor = ClassicEditorBuild;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'codeBlock',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};

  constructor (private userService: UserService, private router: Router, private modalService: NgbModal){}


form = new FormGroup({
  name: new FormControl('', Validators.required), //Le virgolette sono il valore di default che possiamo dare al campo //VALIDATORS, VALIDATORS COMPOS PIù VALIDAZIONI RACCHIUDERE DA []
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
  ripetiPassword: new FormControl('', Validators.required),
  accetto: new FormControl('', Validators.requiredTrue),
  note: new FormControl('', Validators.required)
},
[CustomValidator.MatchValidator('password', 'ripetiPassword')]
);

  // onSubmit(form: any){ per il form template il primo form
  //   console.log(form);
  // }

  onSubmit(){

    const user = this.form.value;
    this.userService.insertUser(user).pipe(take(1)).subscribe({
      next: (res) => {
        console.log(res);
        this.utenteInserito = res;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.userService.datiUtente.next(user);
    this.router.navigate(['home'])
  }

  open(content: any, titolo?: string){
      let title = titolo;

      this.modalService.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
        console.log('azione da eseguire' + titolo)
      }).catch((res) =>{
        console.log('nessuna azione da eseguire')
      });
  }

}


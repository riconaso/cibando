import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule} from 'primeng/divider';
import { ToastModule} from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user-routing.module';
import { MaterialExampleModule } from 'src/material.module';


import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
  RegistrationComponent,
  LoginComponent,
  ProfileComponent,
  UserComponent,


  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    ToastModule,
    CKEditorModule,
    NgbModule,
    UserRoutingModule,
    MaterialExampleModule
  ],
  exports:[]

})
export class UsersModule { }

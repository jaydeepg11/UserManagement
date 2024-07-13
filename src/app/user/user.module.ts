import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {TranslatePipe} from '../pipes/translate.pipe'
@NgModule({
  declarations: [UserProfileComponent,TranslatePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports:[
    UserProfileComponent
  ]
})
export class UserModule { }

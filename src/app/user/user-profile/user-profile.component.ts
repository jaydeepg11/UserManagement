import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
UserForm!:FormGroup;
@Input()Message!:any;

public constructor(private fb:FormBuilder)
{

}
  ngOnInit(): void {
   this.UserForm = this.fb.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Salary:['',Validators.required]
    })
  }

  formsubmit()
  {
    console.log(this.UserForm.value.FirstName + ' ' +this.UserForm.value.LastName + ' ' +this.UserForm.value.Salary);
  }

}

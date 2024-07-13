import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
UserForm!:FormGroup;
@Input()Message!:any;
Message2:string="userManagement2";
data:any;
@Output()UserName: EventEmitter<string>=new EventEmitter<string>();
public constructor(private fb:FormBuilder,private service:UserserviceService)
{

}
  ngOnInit(): void {
   this.UserForm = this.fb.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Salary:['',Validators.required]
    })

    this.service.getdate().subscribe((res)=>{
      this.data=res;
      console.log(res);
    })
  }

  formsubmit()
  {
    console.log(this.UserForm.value.FirstName + ' ' +this.UserForm.value.LastName + ' ' +this.UserForm.value.Salary);
    this.UserName.emit(this.UserForm.value.FirstName+this.UserForm.value.LastName);
  }

}

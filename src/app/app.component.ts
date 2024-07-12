import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  
  
  title = 'UserManagement';
  username !:string;
  @ViewChild('textLabel')Label!:ElementRef

  @ViewChild('childview')child!:UserProfileComponent
  @ViewChildren('childview')children!:QueryList<UserProfileComponent>
  display(value:string)
  {
    this.username ='UserName '+value + ' has been Added';
  }

  ngAfterViewInit(): void {
    console.log(this.Label.nativeElement.innerHTML="User Management System");
    console.log(this.child.Message);
    console.log(this.children.first);
  }

  changecolor()
  {
    this.Label.nativeElement.style.color="red";
  }
  
}

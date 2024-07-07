import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'UserManagement';
  username !:string;
  display(value:string)
  {
    this.username ='UserName '+value + ' has been Added';
  }
}

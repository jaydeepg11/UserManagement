import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { MainDashboardComponent } from './Dashboard/main-dashboard/main-dashboard.component';

const routes: Routes = [
                        {path:'user',component:UserProfileComponent},
                        {path:'about',component:AboutUsComponent},
                        {path:'contact',component:ContactUsComponent},
                        {path:'dashboard',component:MainDashboardComponent},
                        {path:"**",redirectTo:"Dashboard"}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

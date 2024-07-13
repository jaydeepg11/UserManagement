import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { MainDashboardComponent } from './Dashboard/main-dashboard/main-dashboard.component';
import { InformationComponent } from './Dashboard/main-dashboard/information/information.component';
import { AddressComponent } from './Dashboard/main-dashboard/address/address.component';
import { MapComponent } from './Dashboard/main-dashboard/map/map.component';
import { LinkComponent } from './Dashboard/main-dashboard/link/link.component';
import { authGuard } from './gurads/auth.guard';
import { adminGuard } from './gurads/admin.guard';
import { notsubmitGuard } from './gurads/notsubmit.guard';
import { AdminaboutUsComponent } from './about/adminabout-us/adminabout-us.component';
import { canmatchGuard } from './gurads/canmatch.guard';

const routes: Routes = [
                        {path:'user',component:UserProfileComponent},
                        {path:'about',component:AdminaboutUsComponent,canMatch:[canmatchGuard]},
                        {path:'about',component:AboutUsComponent},
                        {path:'contact/:id',component:ContactUsComponent},
                        {path:'dashboard',component:MainDashboardComponent,canActivateChild:[adminGuard],children:[{path:'information',component:InformationComponent},{path:'address',component:AddressComponent},
                                                                                     {path:'Map',outlet:'Map',component:MapComponent,canDeactivate:[notsubmitGuard]},{path:'Link',outlet:'Link',component:LinkComponent,canDeactivate:[notsubmitGuard]}]
                      ,canActivate:[authGuard]},
                        {path:'about/extra',loadChildren:()=>import('./lazy/lazymodule/lazymodule.module').then(m=>m.LazymoduleModule)},
                        {path:"**",redirectTo:"Dashboard"}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

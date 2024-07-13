import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { MainDashboardComponent } from './Dashboard/main-dashboard/main-dashboard.component';
import { InformationComponent } from './Dashboard/main-dashboard/information/information.component';
import { AddressComponent } from './Dashboard/main-dashboard/address/address.component';

const routes: Routes = [
                        {path:'user',component:UserProfileComponent},
                        {path:'about',component:AboutUsComponent},
                        {path:'contact/:id',component:ContactUsComponent},
                        {path:'dashboard',component:MainDashboardComponent,children:[{path:'information',component:InformationComponent},{path:'address',component:AddressComponent}]},
                        {path:'about/extra',loadChildren:()=>import('./lazy/lazymodule/lazymodule.module').then(m=>m.LazymoduleModule)},
                        {path:"**",redirectTo:"Dashboard"}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

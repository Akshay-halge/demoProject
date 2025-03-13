import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { NavbarpageComponent } from './components/navbarpage/navbarpage.component';
import { ProductComponent } from './components/product/product.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { UserinformationComponent } from './components/userinformation/userinformation.component';
import { RegistraionpageComponent } from './components/registraionpage/registraionpage.component';
import { authguardGuard } from './guard/authguard.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginpageComponent
  },
  {
    path:"Navbar",
    component:NavbarpageComponent,
    canActivate:[authguardGuard]
  },
  {
    path:"product",
    component:ProductComponent,
    canActivate:[authguardGuard]
  },
  {
    path:"profilePage",
    component:ProfilepageComponent,
    canActivate:[authguardGuard]
  },
  {
    path:"userInformation",
    component:UserinformationComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'registration',
    component:RegistraionpageComponent,
    canActivate:[authguardGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

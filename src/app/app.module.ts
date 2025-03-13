import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { NavbarpageComponent } from './components/navbarpage/navbarpage.component';
import { ProductComponent } from './components/product/product.component';
import { UserinformationComponent } from './components/userinformation/userinformation.component';
import { RegistraionpageComponent } from './components/registraionpage/registraionpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authguardGuard } from './guard/authguard.guard';
import { AuthinterceptorInterceptor } from './intercepter/authinterceptor.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ProfilepageComponent,
    NavbarpageComponent,
    ProductComponent,
    UserinformationComponent,
    RegistraionpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthinterceptorInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

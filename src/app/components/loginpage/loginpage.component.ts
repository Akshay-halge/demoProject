import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm: FormGroup;
  Registeredusername:string[] =[]

  constructor(private fb: FormBuilder, private router: Router, private mainService:MainService, private toasterService:ToastrService ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.Registeredusername;

    
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return
    }
      // Handle login logic here
      console.log(this.loginForm.value);
      const loginUsername = this.loginForm.value;
      this.mainService.authLogin(loginUsername).subscribe({
        next:((res:any) => {
         console.log(res)
        if(res){
          localStorage.setItem('istoken', 'true');
          localStorage.setItem('token', res.accessToken.toString())
          localStorage.setItem('userinfo',JSON.stringify(res));
          //toaster
          this.toasterService.success('Login Successfully','User Successfully Login')
          this.router.navigate(['/profilePage']);
        }
      }),
      error:((error: any)=>{
        //toaster
        this.toasterService.error('Login Credentials',`Please enter valid username and password`);
        console.log(error);
      })
       
      })




    
  }

}

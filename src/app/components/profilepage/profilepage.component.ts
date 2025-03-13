import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {
  profileDetail:Observable<any> | undefined

  constructor( private mainService:MainService){}
  ngOnInit(): void {
   this.mainService.getProfile().subscribe(res => {
    console.log(res)
   })

   this.profileDetail = this.mainService.getProfile()
   console.log(this.profileDetail)
  }

}

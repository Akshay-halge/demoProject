import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.scss']
})
export class UserinformationComponent implements OnInit {
  constructor(private mainService:MainService){
  
  }
  ngOnInit(): void {
    this.mainService.getAllUser().subscribe(res => {
      console.log(res)
    })
  }

  
}

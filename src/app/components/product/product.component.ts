import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productCollectValue:any;

  constructor( private mainService:MainService){

  }
  ngOnInit(): void {
   this.mainService.getAllProduct().subscribe(res => {
     this.productCollectValue = res
    console.log(this.productCollectValue)



   })
  }

}

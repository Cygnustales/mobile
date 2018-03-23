import { Component, OnInit } from '@angular/core';
import { Services } from '../../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
  bestSeller: [any];
  constructor(private service: Services, private router: Router) { }

  ngOnInit() {
    this.service.GetProduct('best_selling_desc','new','2000000', '').subscribe(res => {
      this.bestSeller = res.data;
    })
  }
  detail(id:number,seo:string){
    this.router.navigateByUrl('detail/'+seo+'/'+id);
  }
  allProducts(){
    this.router.navigateByUrl('/products');
  }
}

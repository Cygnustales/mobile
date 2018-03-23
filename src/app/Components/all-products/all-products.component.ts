import { Component, OnInit } from '@angular/core';
import { Services } from '../../Services/services.service';
import { DataService } from '../../Services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allproduct:[any];
  constructor(private service:Services, private data: DataService, private router:Router) { }

  ngOnInit() {
    this.data.changeMessage('true');
    this.service.GetProduct('','','','').subscribe(res => {
      this.allproduct = res.data;
    })
  }
  detail(id:number,seo:string){
    this.router.navigateByUrl('detail/'+seo+'/'+id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Services } from '../../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.css']
})
export class TopBrandsComponent implements OnInit {
  banner: any;
  brands: [any];
  
  constructor(private service:Services, private router: Router) { }

  ngOnInit() {
    this.service.GetBrands().subscribe(res => {
      this.banner = res.data.banner;
      this.brands = res.data.brands;
    })
  }

  toList(id:number,brand:string){
    this.router.navigateByUrl('/list/'+brand+'/'+id);
  }
}

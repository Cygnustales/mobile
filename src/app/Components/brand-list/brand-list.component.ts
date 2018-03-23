import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../../Services/services.service';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  id: number;
  brandList: [any];
  total:number;
  banner: string;

  constructor(private route: ActivatedRoute, private router: Router, 
    private service: Services, private data: DataService) { }

  ngOnInit() {
    this.data.changeMessage('true');
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.service.GetProduct('best_selling_desc','new','', this.id).subscribe(res => {
      this.brandList = res.data;
      this.total = this.brandList.length;
      this.banner = res.brandInfos[this.id].bannerUrl;
    })
  }
  detail(id:number,seo:string){
    this.router.navigateByUrl('detail/'+seo+'/'+id);
  }
}

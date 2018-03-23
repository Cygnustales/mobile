import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../../Services/services.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {
  id: number;
  detailData: any;
  brand: string;
  description: string;
  gallery:[any];
  fullName:string;
  highlight:string;
  uspImage:[any];
  desc: boolean = false;
  spec: boolean = true;
  specs:any;
  kreditPlus:any;
  kreditPlusPeriod:any;
  screenSize:string;
  backCamera:string;
  battery:string;
  bluetooth:string;
  color:string;
  external:string;
  frontCamera:string;
  gps:string;
  fourG:string;
  micro:string;
  network:string;
  os:string;
  processor:string;;
  ram:string;
  screenResolution:string;
  sim:string;
  simType:string;
  storage:string;
  wifi:string;
  constructor(private route:ActivatedRoute, private router: Router, 
    private service: Services, private sanitizer: DomSanitizer, private data: DataService) { }

  ngOnInit() {
    this.data.changeMessage('true');
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
    this.getDetail();
  }

  getDetail(){
    this.service.GetDetail(this.id).subscribe(res => {
      this.detailData = res.data;
      this.gallery = res.data.gallery;
      this.fullName = res.data.fullName;
      this.highlight = res.data.financingSimpleDiscription;
      this.uspImage = res.data.uspImage;
      this.description = res.data.descriptionWebView;
      this.specs = this.detailData.specs;
      this.screenSize = this.specs['Screen Size'];
      this.backCamera = this.specs['Back Camera'];
      this.battery = this.specs['Battery Capacity'];
      this.bluetooth = this.specs['Bluetooth'];
      this.color = this.specs['Color'];
      this.external = this.specs['External Storage'];
      this.frontCamera = this.specs['Front Camera'];
      this.gps = this.specs['GPS'];
      this.fourG = this.specs['Has 4G'];
      this.micro = this.specs['Micro SD'];
      this.network = this.specs['Network'];
      this.os = this.specs['OS'];
      this.processor = this.specs['Processor Speed'];
      this.ram = this.specs['Ram'];
      this.screenResolution = this.specs['Screen Resolution'];
      this.sim = this.specs['Sim'];
      this.simType = this.specs['Sim Type'];
      this.storage = this.specs['Storage'];
      this.wifi = this.specs['Wifi'];
      this.kreditPlus = this.detailData.kreditPlus[10].installment;
      this.kreditPlusPeriod = this.detailData.kreditPlus[10].installmentPeriod;
      this.showDetail();
    })
  }

  showDetail(){
    this.brand = this.detailData.brandName;
    window.scrollTo(0, 0);
  }
  sanitize(url:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  toInfo(){
    this.router.navigateByUrl('/info');
  }

  variant(varData:any){
    this.data.getPassData(varData);
    this.router.navigateByUrl('/detail/variant');
  }

  descBtn() {
    this.desc = true;
    this.spec = false;
  }
  specBtn() {
    this.desc = false;
    this.spec = true;
  }



}

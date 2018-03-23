import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit {
  vardata: any;
  combinationDevices:[any];
  storages:any;
  color:any;
  image:any;
  constructor(private data: DataService, private sanitizer: DomSanitizer,
    private router:Router) { }

  ngOnInit() {
    this.data.changeMessage('true');
    this.getData();
  }
  getData(){

    this.vardata = this.data.passData;
    this.combinationDevices = this.vardata.combinationDevices;

    let vd = []
    let cl = []
    this.combinationDevices.forEach(data => {
      vd.push(data.storage);
      cl.push(data.color);
    });
    this.storages = this.filterArray(vd);
    this.color = cl;
  }
  filterArray(arr){
    let array = Array.from(new Set(arr))
    return array
  }
  setColor(color:string){
    this.vardata.color=color;
  }
  sanitize(uri:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(uri);
  }
  buy(data:any){
    this.data.getPassData(data);
    this.router.navigateByUrl('/login');
  }
}

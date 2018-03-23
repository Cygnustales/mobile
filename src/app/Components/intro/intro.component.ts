import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  vardata:any;
  combinationDevices:[any];
  storages:any;
  color:any;
  kreditplus:any;
  kreditplus10:any;
  kreditplus20:any;
  pilih10:Boolean;
  pilih20:Boolean;
  selected:any;
  downpayment:any;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.vardata = this.data.passData;
    this.combinationDevices = this.vardata.combinationDevices;
    this.kreditplus = this.vardata.kreditPlus;
    this.kreditplus10 = this.kreditplus[10];
    this.kreditplus20 = this.kreditplus[20];
    let vd = []
    let cl = []
    this.combinationDevices.forEach(data => {
      vd.push(data.storage);
      cl.push(data.color);
    });
    this.storages = this.filterArray(vd);
    this.color = cl;
    this.selectedDp(10);
    this.pilihDp10();
  }

  selectedDp(dp:number){

    if(dp === 10){
      this.selected = this.kreditplus10;
      this.downpayment = this.selected.downPayment + this.selected.administrationFee;
    }else if(dp === 20){
      this.selected = this.kreditplus20;
      this.downpayment = this.selected.downPayment + this.selected.administrationFee;
    }
  }

  pilihDp10(){
    this.pilih20 = false;
    this.pilih10 = true;
    this.selectedDp(10);
  }

  pilihDp20(){
    this.pilih20 = true;
    this.pilih10 = false;
    this.selectedDp(20);
  }

  filterArray(arr){
    let array = Array.from(new Set(arr))
    return array
  }

}

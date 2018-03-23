import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.scss']
})
export class NewloginComponent implements OnInit {
  tempData: any;
  constructor(private data:DataService, private router:Router) { }

  ngOnInit() {
    this.tempData = this.data.passData;
  }

  CreateAccount(){
    this.data.getPassData(this.tempData);
    this.router.navigateByUrl('/intro');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { Services } from '../../Services/services.service';
import { DataService } from '../../Services/data/data.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  back:any=false;

  constructor(private router: Router, private service: Services, 
    private data: DataService, private location: Location) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(data => {
      this.back = data;
    })
  }

  toInfo(){
    this.router.navigateByUrl('/info');
  }
  toRegister(){
    this.router.navigateByUrl('/otp');
  }
  toHome(){
    this.router.navigateByUrl('/');
  }
  goBack(){
    this.location.back();
  }
}

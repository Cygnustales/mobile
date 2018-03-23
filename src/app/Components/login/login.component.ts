import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  request:any;
  waiting:any;
  constructor(private data:DataService) { }
  phone: number;
  ngOnInit() {
    this.data.changeMessage('true');
    this.request = true;
    this.waiting = false;
  }

  requestOtp(event){
    this.phone = event.target.value;
    const reqData = {
      phone : this.phone
    };
  }

  goOtp(){
    this.request = false;
    this.waiting = true;
  }

}

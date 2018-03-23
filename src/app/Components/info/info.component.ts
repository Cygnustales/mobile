import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserModule, DomSanitizer, } from '@angular/platform-browser';
import { Services } from '../../Services/services.service';
import { environment } from '../../../environments/environment';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private service: Services, private data: DataService) {
  }

  ngOnInit() {
    this.data.changeMessage('true');
  }
  sanitize(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(environment.baseUrl+'financing/edu');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BrowserModule, DomSanitizer, } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class Services {

  constructor(private http:HttpClient, private sanitizer: DomSanitizer) { }

  GetBrands():Observable<any> {
    return this.http.get(environment.baseUrl+''+environment.v1+'brands')
      .map(response => response as any);
  }

  GetProduct(sort:string,condition:string,range:string,brandId:any){

    return this.http.get(environment.baseUrl+''+environment.v1+'products?sort='+sort+'&condition='+condition+'&range_to='+range+'&brand='+brandId)
      .map(response => response as any);
  }

  GetDetail(id:number):Observable<any> {
    return this.http.get(environment.baseUrl+''+environment.v1+'products/'+id)
      .map(response => response as any);
  }
  OtpRequest(reqData:number):Observable<any>{
    return this.http.post(environment.baseUrl+''+environment.v2+'otp/request', reqData)
  }

  GetCity():Observable<any>{
    return this.http.get(environment.baseUrl+''+environment.v1+'loan-application/initial-lists')
  }

  GetDistrict(city:string):Observable<any>{
    return this.http.get(environment.baseUrl+''+environment.v1+'loan-application/district-list?city='+city)
  }

  GetSubDistrict(city:string, district:string):Observable<any>{
    return this.http.get(environment.baseUrl+''+environment.v1+'loan-application/subdistrict-list?city='+city+'&district='+district);
  }
}

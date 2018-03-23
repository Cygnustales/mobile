import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>('false');
  private dataSource: BehaviorSubject<any> =  new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  passData: any;
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getPassData(data:string){
    this.passData = data;
  }


}
import { Component, OnInit } from '@angular/core';
import { Services } from '../../Services/services.service';
import { DataService } from '../../Services/data/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  first:Boolean;
  second:Boolean;
  third:Boolean;
  four:Boolean;
  city:[any];
  education:any;
  homeStatus:[any];
  jobPosition:any;
  marital:any;
  profession:any;
  kecamatan: any;
  kelurahan: any;
  selectedCity: string;
  selectedKecamatan: string;
  selectedKelurahan: string;

  constructor(private service: Services, private data: DataService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(id => {
      this.page(id.id);
    })
    this.data.changeMessage('true');
    this.getInitital();
  }

  page(id:string){
    if(id === '2'){
      this.toSecond();
    }else if(id === '3'){
      this.toThird();
    }else if(id === '4'){
      this.toFour();
    }else{
      this.first = true;
      this.second = false;
      this.third = false;
      this.four = false;
    }
  }

  getInitital(){
    this.service.GetCity().subscribe(res => {
      const objprof = res.data.lists.profession;
      const objhome = res.data.lists.homeStatus;
      const objmar = res.data.lists.marital;
      const objjobs = res.data.lists.jobPosition;
      const objedu = res.data.lists.education;
      let edu = [];
      let home = [];
      let mar = [];
      let jobs = [];
      let prof = [];

      for (let key in objedu) {
        const tmp = {'id': key,'name': objedu[key]}
        edu.push(tmp);
      }
      for (let key in objjobs) {
        const tmp = {'id': key,'name': objjobs[key]}
        jobs.push(tmp);
      }
      for (let key in objprof) {
        const tmp = {'id': key,'name': objprof[key]}
        prof.push(tmp);
      }
      for (let key in objmar) {
        const tmp = {'id': key,'name': objmar[key]}
        mar.push(tmp);
      }
      this.education = edu;
      this.jobPosition = jobs;
      this.profession = prof;
      this.city = res.data.lists.city;
      this.marital = mar;
    })
    
   
  }

  getKecamatan(id:string){
    this.selectedCity = id;
    this.service.GetDistrict(id).subscribe(res => {
      this.kecamatan = res.data.districts;
    })
  }

  getKelurahan(id:string, did:string){
    this.selectedKecamatan = id;
    this.service.GetSubDistrict(did, id).subscribe(res => {
      this.kelurahan = res.data.subDistricts;
    })
  }

  selectKelurahan(id:string){
    this.selectedKelurahan = id;
  }

  toNext(id:string){
    this.router.navigateByUrl('/register/'+id);
  }

  toSecond(){
    this.first = false;
    this.second = true;
    this.third = false;
    this.four = false;
  }

  toThird(){
    this.first = false;
    this.second = false;
    this.third = true;
    this.four = false;
  }

  toFour(){
    this.first = false;
    this.second = false;
    this.third = false;
    this.four = true;
  }

  selectJobs(id:string){
  }
}

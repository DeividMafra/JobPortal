import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  companyInfoForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    numberOfJobs: new FormControl('', Validators.required),
    website: new FormControl(''),
    postalCode: new FormControl('', Validators.required),
  });

  recruiterInfo = new FormGroup({
    currentTitle: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    heardAboutUs: new FormControl('', Validators.required),
    acceptTerms: new FormControl('', Validators.required),
  });

  public heardAboutUsSrc = ['LinkedIn', 'Facebook', 'Github', 'Instagram'];

  constructor() { }

  ngOnInit() {
  }

}

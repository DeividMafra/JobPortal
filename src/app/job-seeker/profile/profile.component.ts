import { JobType } from 'src/app/models/jobType';
import { SclInfo } from './../../models/sclInfo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public fileName: string;

  public sclTypes: SclInfo[] = [
    {
      id: 1,
      description: "Skill",
    },
    {
      id: 2,
      description: "Certificate",
    },
    {
      id: 3,
      description: "Link",
    },
  ];

  public jobTypes: JobType[] = [
    {
      id: 1,
      description: "Full-time",
    },
    {
      id: 2,
      description: "Part-time",
    },
    {
      id: 3,
      description: "Contract",
    },
    {
      id: 4,
      description: "Intern",
    },
    {
      id: 5,
      description: "Co-op",
    },
    {
      id: 6,
      description: "Freelance",
    },
  ];

  resumeUploaded = false;

  personalInfoForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  jobPreferencesForm = new FormGroup({
    desiredJobTitle: new FormControl(''),
    desiredJobTypes: new FormControl(''),
    desiredSalary: new FormControl(''),
    isRelocation: new FormControl(''),
  });

  uploadResumeForm = new FormGroup({
    uploadResume: new FormControl('')
  });

  educationForm = new FormGroup({
    degree: new FormControl('', Validators.required),
    school: new FormControl(''),
    fieldOfStudy: new FormControl(''),
    grade: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    isAttending: new FormControl(''),
    educationFrom: new FormControl(''),
    educationTo: new FormControl('')
  });

  //to add skills, certifications, and links
  //the user first select the type from one of the above options
  //and then insert in as string the data.
  //NOW??????
  skillsCertificationsLinksForm = new FormGroup({
    sclType: new FormControl('', Validators.required),
    sclDescription: new FormControl(''),
  });

  workExperienceForm = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    jobCompany: new FormControl('', Validators.required),
    country: new FormControl(''),
    city: new FormControl(''),
    isCurrentJob: new FormControl(''),
    workFrom: new FormControl(''),
    workTo: new FormControl(''),
    jobDescription: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  uploadResume = (file) => {
    // let fileName = new saveAs(file, `resume.pdf`);
    // console.log('file.target.files[0].name', file.target.files[0].name)

    this.resumeUploaded = true

    let today = new Date();
    let fileDate = today.toISOString().split('T')[0];

    this.fileName = 'resume' + fileDate;

    console.log('fileName', this.fileName)

  }

}

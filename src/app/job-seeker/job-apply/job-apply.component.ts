import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {

  jobApplyForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl('')
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  apply = () => {
    if (!this.jobApplyForm.valid) {
      return console.log('error');
    }

    this.router.navigate(['/applied-successfully']);

  }

  uploadResume = (event) => {
    console.log('event', event)
  }

}

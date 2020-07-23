import { Component, OnInit } from '@angular/core';
import { PostedJob } from 'src/app/models/postedJob';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  public posts: Array<PostedJob> = [
    {
      id: 1,
      jobtitle: "Web Designer, Graphic Designer, UI/UX Designer",
      location: "Wellesley Road, London",
      isActive: true,
      type: ["Full time"],
      numberOfCandidate: 9
    },
    {
      id: 2,
      jobtitle: "Web Developer & Software Developer",
      location: "Garden Road, UK",
      isActive: false,
      type: ["Contract"],
      numberOfCandidate: 35
    },
    {
      id: 3,
      jobtitle: "IT Department & Manager",
      location: "Drive Post NY 676",
      isActive: true,
      type: ["Full time", "Contract"],
      numberOfCandidate: 10
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

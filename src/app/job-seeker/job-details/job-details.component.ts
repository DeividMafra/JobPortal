import { Component, OnInit } from '@angular/core';

interface JobDetails {
  id: number;
  applyBefore: Date;
  keywords: Array<string>;
  description: string;
  requirements: string;
  skillsList: Array<string>;
  jobDetails: {
    company: string;
    location: string;
    jobType: Array<string>;
    email: string;
  }
}
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  public jobDetails: JobDetails[];

  constructor() { }

  ngOnInit(): void {
    this.fakeJobDetails();
  }

  fakeJobDetails = () => {
    this.jobDetails = [
      {
        id: 1,
        applyBefore: new Date('07/30/2020'),
        keywords: ['Web Design', 'SEO', 'Finance', 'Video', 'Education', 'Content Writter'],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into essentially unchanged. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        requirements: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        skillsList: ['Work experience',
          'Skills (soft skills and/or technical skills)',
          'Personal qualities and attributes',
          'Support software roll-outs to production',
          'Guide and mentor junior engineers. Serve as team lead if appropriate.'],
        jobDetails: {
          company: "Tourt Design LTD",
          location: "Wellesley Rd, London",
          jobType: ['Full-time', 'Part-time'],
          email: "hello@company.com",
        }
      }
    ];

    console.log('this.jobDetails', this.jobDetails)
  }
}

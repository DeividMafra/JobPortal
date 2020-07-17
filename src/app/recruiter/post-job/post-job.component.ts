import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { JobType } from 'src/app/models/jobType';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  public isCaptchaResolved: boolean = false;

  public isEditPost: boolean = false;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.isCaptchaResolved = true;
  }

  jobPostForm = new FormGroup({
    jobTitle: new FormControl(''),
    category: new FormControl(''),
    type: new FormControl(''),
    tags: new FormControl(''),
    experience: new FormControl(''),
    description: new FormControl(''),
  });

  public categories: Category[];
  public types: JobType[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    this.getTypes();
    this.getRoute();
  }

  onSubmit = () => {
    if (!this.jobPostForm.valid) {
      return console.log('error');
    }

    this.router.navigate(['/post-job-successfully']);
  }

  getCategories = () => {
    this.categories = [
      {
        id: 1,
        description: "Web Development",
      },
      {
        id: 2,
        description: "Graphics Design",
      },
      {
        id: 3,
        description: "Data Entry",
      },
      {
        id: 4,
        description: "Visual Editor",
      },
      {
        id: 5,
        description: "Office Assistant",
      },
      {
        id: 6,
        description: "IT Manager",
      },
    ]
    console.log('this.categories ', this.categories)
  }

  getTypes = () => {
    this.types = [
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
    ]
    console.log('this.types ', this.types)
  }

  getRoute = () => {
    let jobId = this.activatedRoute.snapshot.paramMap.get('jobId');

    if (jobId !== null) {
      this.isEditPost = true
    }

    console.log(jobId)
    console.log(this.isEditPost)

  }


}

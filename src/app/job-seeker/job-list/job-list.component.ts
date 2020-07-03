import { Component, OnInit } from '@angular/core';

interface JobPost {
  id: number;
  title: string;
  type: Array<string>;
  address: string;
  postDays: number;
  logoPath: string;
}
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  public posts: JobPost[];
  public pageOfItems: Array<JobPost>;

  constructor() { }

  ngOnInit(): void {
    this.fakeData();
  }

  fakeData = () => {
    this.posts = [
      {
        id: 1,
        title: "Web Designer, Graphic Designer, UI/UX Designer",
        type: ["Full time", "Contract"],
        address: "Wellesley Road, London",
        postDays: 9,
        logoPath: "../../../assets/logo1.jpg"
      },
      {
        id: 2,
        title: "Web Developer & Software Developer",
        type: ["Full time"],
        address: "Garden Road, UK",
        postDays: 5,
        logoPath: "../../../assets/logo2.jpg"
      },
      {
        id: 3,
        title: "Application Developer & Web Designer",
        type: ["Part time"],
        address: "Drive Post NY 676",
        postDays: 1,
        logoPath: "../../../assets/logo3.jpg"
      },
      {
        id: 4,
        title: "IT Department & Manager",
        type: ["Full time", "Contract", "Freelancer"],
        address: "Drive Post NY 676",
        postDays: 1,
        logoPath: "../../../assets/logo4.jpg"
      },
      {
        id: 5,
        title: "Office Assistant",
        type: ["Intern"],
        address: "Wellesley Road, London",
        postDays: 10,
        logoPath: "../../../assets/logo5.jpg"
      },
      {
        id: 6,
        title: "Web Designer, Graphic Designer, UI/UX Designer",
        type: ["Full time", "Contract"],
        address: "Wellesley Road, London",
        postDays: 9,
        logoPath: "../../../assets/logo1.jpg"
      },
      {
        id: 7,
        title: "Web Developer & Software Developer",
        type: ["Full time"],
        address: "Garden Road, UK",
        postDays: 5,
        logoPath: "../../../assets/logo2.jpg"
      },
      {
        id: 71,
        title: "Web Developer & Software Developer",
        type: ["Full time"],
        address: "Garden Road, UK",
        postDays: 5,
        logoPath: "../../../assets/logo2.jpg"
      },
      {
        id: 8,
        title: "Application Developer & Web Designer",
        type: ["Part time"],
        address: "Drive Post NY 676",
        postDays: 1,
        logoPath: "../../../assets/logo3.jpg"
      },
      {
        id: 9,
        title: "IT Department & Manager",
        type: ["Full time", "Contract", "Freelancer"],
        address: "Drive Post NY 676",
        postDays: 1,
        logoPath: "../../../assets/logo4.jpg"
      },
      {
        id: 91,
        title: "IT Department & Manager",
        type: ["Full time", "Contract", "Freelancer"],
        address: "Drive Post NY 676",
        postDays: 1,
        logoPath: "../../../assets/logo4.jpg"
      },
      {
        id: 10,
        title: "Office Assistant",
        type: ["Intern"],
        address: "Wellesley Road, London",
        postDays: 10,
        logoPath: "../../../assets/logo5.jpg"
      },
      {
        id: 11,
        title: "Office Assistant",
        type: ["Intern"],
        address: "Wellesley Road, London",
        postDays: 10,
        logoPath: "../../../assets/logo5.jpg"
      },
      {
        id: 12,
        title: "Office Assistant",
        type: ["Intern"],
        address: "Wellesley Road, London",
        postDays: 10,
        logoPath: "../../../assets/logo5.jpg"
      },
      {
        id: 13,
        title: "Office Assistant",
        type: ["Intern"],
        address: "Wellesley Road, London",
        postDays: 10,
        logoPath: "../../../assets/logo5.jpg"
      },
    ]

    console.log('this.posts', this.posts)
  }

  onChangePage(pageOfItems: Array<JobPost>) {
    this.pageOfItems = pageOfItems;
  }

}

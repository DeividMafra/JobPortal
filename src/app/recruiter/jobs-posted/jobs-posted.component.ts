import { Component, OnInit } from '@angular/core';
import { PostedJob } from 'src/app/models/postedJob';

@Component({
  selector: 'app-jobs-posted',
  templateUrl: './jobs-posted.component.html',
  styleUrls: ['./jobs-posted.component.css']
})
export class JobsPostedComponent implements OnInit {

  isPostActive: boolean;

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
    },
    {
      id: 5,
      jobtitle: "Office Assistant",
      location: "Wellesley Road, London",
      isActive: false,
      type: ["Part time"],
      numberOfCandidate: 58
    },
    {
      id: 6,
      jobtitle: "Web Designer, Graphic Designer, UI/UX Designer",
      location: "Wellesley Road, London",
      isActive: true,
      type: ["Full time", "Contract"],
      numberOfCandidate: 22,
    },
    {
      id: 7,
      jobtitle: "Web Developer & Software Developer",
      location: "Garden Road, UK",
      isActive: true,
      type: ["Full time", "Contract"],
      numberOfCandidate: 5,
    },
    {
      id: 13,
      jobtitle: "Office Assistant",
      location: "Wellesley Road, London",
      isActive: false,
      type: ["Intern"],
      numberOfCandidate: 10,
    },
  ]

  public pageOfItems: Array<PostedJob>;

  constructor() { }

  ngOnInit() {
  }

  onChangePage(pageOfItems: Array<PostedJob>) {
    this.pageOfItems = pageOfItems;
  }

  checkJobStatus = (event, id) => {

    let postToEdit = this.posts.find(post => post.id === id);
    postToEdit.isActive = !postToEdit.isActive;

  }
}

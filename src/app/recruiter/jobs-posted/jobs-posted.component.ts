import { Component, OnInit } from '@angular/core';

interface PostedJob {
  id: number;
  jobtitle: string;
  location: string;
  isActive: boolean;
  numberOfCandidate: number;
}

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
      numberOfCandidate: 9
    },
    {
      id: 2,
      jobtitle: "Web Developer & Software Developer",
      location: "Garden Road, UK",
      isActive: false,
      numberOfCandidate: 35
    },
    {
      id: 3,
      jobtitle: "IT Department & Manager",
      location: "Drive Post NY 676",
      isActive: true,
      numberOfCandidate: 10
    },
    {
      id: 5,
      jobtitle: "Office Assistant",
      location: "Wellesley Road, London",
      isActive: false,
      numberOfCandidate: 58
    },
    {
      id: 6,
      jobtitle: "Web Designer, Graphic Designer, UI/UX Designer",
      location: "Wellesley Road, London",
      isActive: true,
      numberOfCandidate: 22,
    },
    {
      id: 7,
      jobtitle: "Web Developer & Software Developer",
      location: "Garden Road, UK",
      isActive: true,
      numberOfCandidate: 5,
    },
    {
      id: 13,
      jobtitle: "Office Assistant",
      location: "Wellesley Road, London",
      isActive: false,
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

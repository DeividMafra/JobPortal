import { JobSearchDTO } from './../../../models/jobSearchDTO';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  @Output() newSearch: EventEmitter<JobSearchDTO> = new EventEmitter();

  public categories: Category[];

  searchForm = new FormGroup({
    jobTitle: new FormControl(''),
    location: new FormControl(''),
    category: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.getCategories();
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

  search() {
    this.newSearch.emit(this.searchForm.value);
    console.log("Search string>>>", this.searchForm.value);
  }

}

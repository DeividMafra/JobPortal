import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CandidateSearchDTO } from 'src/app/models/candidateSearchDTO';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.css']
})
export class SearchCandidateComponent implements OnInit {

  searchForm = new FormGroup({
    jobTitle: new FormControl(''),
    location: new FormControl('')
  });

  @Output() newSearch: EventEmitter<CandidateSearchDTO> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.newSearch.emit(this.searchForm.value);
    console.log("Search string>>>", this.searchForm.value);
  }

}

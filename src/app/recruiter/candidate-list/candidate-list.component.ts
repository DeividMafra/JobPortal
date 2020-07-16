import { Component, OnInit } from '@angular/core';
import { CandidateSearchDTO } from '../../models/candidateSearchDTO';

interface CandidateList {
  id: number;
  candidateName: string;
  address: string;
  desiredJob: string;
}

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  public candidates: CandidateList[];
  public pageOfItems: Array<CandidateList>;

  constructor() { }

  ngOnInit() {
    this.fakeCandidates();
  }


  fakeCandidates = () => {
    this.candidates = [
      {
        id: 1,
        candidateName: 'Mibraj Alex',
        address: "Toronto - ON",
        desiredJob: 'Web Developer',
      },
      {
        id: 2,
        candidateName: "Felica Kareon",
        address: "Calgary - AB",
        desiredJob: "PHP Developer"
      },
      {
        id: 3,
        candidateName: "Malisa Petel",
        address: "Toronto - ON",
        desiredJob: "Business Consultant"
      },
      {
        id: 4,
        candidateName: "Quence Joes",
        address: "Calgary - AB",
        desiredJob: "Graphics Designer"
      },
      {
        id: 5,
        candidateName: "Mary Mainor",
        address: "Toronto - ON",
        desiredJob: "Technical Writter"
      },
      {
        id: 6,
        candidateName: "Jack Hallock",
        address: "Toronto - ON",
        desiredJob: "Marketing Expert"
      },
      {
        id: 7,
        candidateName: "Lucas Mason",
        address: "Mississauga - ON",
        desiredJob: "UX Designer"
      },
      {
        id: 71,
        candidateName: "Jerry Hudson",
        address: "Calgary - AB",
        desiredJob: "Video Editor"
      }
    ]

    console.log('this.candidates', this.candidates)
  }

  onChangePage(pageOfItems: Array<CandidateList>) {
    this.pageOfItems = pageOfItems;
  }

  getCandidateFiltered(searchArray: CandidateSearchDTO) {

    console.log(searchArray);
    //TO-DO the filter accordingly with the JSON
  }

}

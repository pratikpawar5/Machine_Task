import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Result } from '../core/models/result';
import { CommonService } from '../core/service/common.service';
interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  searchText = new FormControl();

  sorting: string;

  sortingList: Sort[] = [
    { value: 'A-Z', viewValue: 'NAME (A-Z)' },
    { value: 'Z-A', viewValue: 'NAME (Z-A)' },
    { value: '0-9', viewValue: 'Rank ↑' },
    { value: '9-0', viewValue: 'Rank ↓' }
  ];

  resultArray: Array<Result>;

  totalCount:number;
 constructor(private commonService: CommonService) { }

  ngOnInit(): void {

  }
  onClickSearch() {
    this.commonService.getSearchResult(this.searchText.value).subscribe(
      res => {
        this.resultArray = res.items;
        this.totalCount = res.total_count;
        console.log(this.totalCount)
      }
    )
  }
  sortingData() {
    if(this.sorting === 'A-Z')
    {
      this.resultArray.sort((a, b) => (a.login > b.login) ? 1 : -1)
    }
    else if (this.sorting === 'Z-A') {
      this.resultArray.sort((a, b) => (a.login > b.login) ? -1 : 1)
    }
    else if (this.sorting === '0-9') {
      this.resultArray.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
    else if (this.sorting === '9-0') {
      this.resultArray.sort((a, b) => (a.id > b.id) ? -1 : 1)
    }
    else {
     console.log("Default State");
    }
  }
}

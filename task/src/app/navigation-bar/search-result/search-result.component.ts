import { Component, OnInit, Input } from '@angular/core';
import { UserDetail } from '../../core/models/user-details';
import { CommonService } from 'src/app/core/service/common.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  resultArray: Array<any>;

  @Input()
  totalCount:number;
  p: number = 1;
  count: number = 10;

  userDetails: Array<UserDetail>;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onClickDetails(name: string) {
    this.commonService.getUserDetails(name).subscribe(res => {
      this.userDetails = res;
    })

  }
}

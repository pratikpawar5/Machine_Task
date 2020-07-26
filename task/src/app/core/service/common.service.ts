import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  /*HTTP GET Method for Searching purpose*/
  getSearchResult(searchText: string) {
    return this.http.get<any>('https://api.github.com/search/users', { params: { q: searchText } })
  }

  /* HTTP GET Method for fetching particular user details on click details button */
  getUserDetails(username: string) {
    return this.http.get<any>('https://api.github.com/users/' + username + '/repos');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class RecipiesService {

  private searchInput: string = "";

  constructor(
    private httpClient: HttpClient
  ) { }


  getRecipies(): Observable<any> {
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.searchInput}&app_id=5515f416&app_key=ca6304afa0bcc7ca0ab5595deb574cee`;
    return this.httpClient.get(apiUrl);
  }



  getSearchInput(): string {
    return this.searchInput;
  }

  setSearchInput(searchInput: string): void {
    this.searchInput = searchInput;
  }



}

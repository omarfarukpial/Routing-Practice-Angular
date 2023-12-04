import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class RecipiesService {

  private searchInput: string = "";
  private recipiesSubject = new Subject<any>();
  recipiesObservable = this.recipiesSubject.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }


  getRecipies() {
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.searchInput}&app_id=5515f416&app_key=ca6304afa0bcc7ca0ab5595deb574cee`;

    this.httpClient.get(apiUrl).subscribe((response: any) => {
      this.recipiesSubject.next(response.hits);
    });


  }



  getSearchInput(): string {
    return this.searchInput;
  }

  setSearchInput(searchInput: string): void {
    this.searchInput = searchInput;
  }



}

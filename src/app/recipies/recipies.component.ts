import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipiesService } from '../services/recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  searchInput: string = "";
  recipies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipiesService: RecipiesService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchInput = params['search'];
      this.recipiesService.setSearchInput(this.searchInput);
      this.recipiesService.getRecipies().subscribe((response: any) => {
        const newRecipies = response.hits.map((hit: any) => hit.recipe);
        this.recipies = [...this.recipies, ...newRecipies];
      });
    });
  }
}

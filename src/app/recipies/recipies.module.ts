import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipiesComponent } from './recipies.component';
import { FormsModule } from '@angular/forms';
import { RecipiesRoutingModule } from './recipies-routing.module';
import { RecipiesService } from '../services/recipies.service';



@NgModule({
  declarations: [
    RecipiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipiesRoutingModule
  ],
  providers: [
    RecipiesService
  ],
})
export class RecipiesModule { }

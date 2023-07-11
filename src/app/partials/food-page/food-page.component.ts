import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { recipes,main, Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:any;

  constructor(private activatedRoute:ActivatedRoute, private foodService:RecipeService){

    this.activatedRoute.params.subscribe((param)=>{
      this.foodService.getFood(param['url']).subscribe(val=>{
        this.food=val
        console.log(this.food);
      })

      })

  }






}

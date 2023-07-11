import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { recipes,main, Recipe } from 'src/app/models/recipe.model';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!:any;

  // ngOnInit(){
  //   console.log('hello')

  // }
  ngOnInit(){
    this.primengconfig.ripple = true


  }

  constructor(private activatedRoute:ActivatedRoute, private foodService:RecipeService,
    private primengconfig:PrimeNGConfig){

    this.activatedRoute.params.subscribe((param)=>{
      this.foodService.getFood(param['url']).subscribe(val=>{
        this.food=val
        console.log(this.food);
      })

      })

  }






}

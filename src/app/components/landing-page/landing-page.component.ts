import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {



  data!:any;

  constructor(private recipe:RecipeService){
    // this.getrecipe()
  }


  ngOnInit(){

  }

  getrecipe(input:any){
    // console.log('data fetched!')
     this.recipe.getrecipe(input).subscribe(res => {
      this.data = res
      console.log(this.data);
    })

  }





}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = environment.base

  constructor(private http:HttpClient){

  }

  getrecipe(input:any){


    return this.http.get(this.baseUrl, {
      params: {
        app_id: environment.app_id,
        app_key: environment.app_key,
        q:input
      }
    })
  }



}

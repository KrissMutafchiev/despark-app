/**
 * Created by krisd3v on 28.4.2017 г..
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'

@Injectable()
export class ArticleService{
  private _url:string = "data/data.json";

  constructor( private _http: Http ){
  }

  getArticles(){
    return this._http.get(this._url)
      .map((response:Response)=> response.json());
  }

  articleID(articID){
    return this.getArticles().map( data => {console.log(data); return data; })
      .concatMap(arr => Observable.from(arr))
      .filter( (article:any) => article.id === articID )
  }


}

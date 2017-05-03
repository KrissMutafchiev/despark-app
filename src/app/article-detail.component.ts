/**
 * Created by krisd3v on 29.4.2017 г..
 */
import { Component, OnInit ,Input } from '@angular/core';
import { Router,RouterModule , ActivatedRoute } from '@angular/router';
import { ArticleService } from './articles.service';
import {AppComponent, Article} from "./app.component";


@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./app.component.css'],

})

export class ArticleDetail{
  articleID: number;
  articleTitle:string;
  articleText:string;
  articleImageUrl:string;
  articleComment:any[];


  detailArt: Article;

  constructor(private route: ActivatedRoute , private _articleService:ArticleService  ) {
    this.detailArt = new Article();


    this.route.params.subscribe(
      (params) => {
        this.articleID = params['id'];
        console.log(this.articleID);
        this._articleService.articleID(this.articleID).subscribe( article => {this.detailArt = article});

        console.log(this.detailArt)
      });
  }

}

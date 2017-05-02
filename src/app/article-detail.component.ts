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

  @Input() article: Article;

  constructor(private route: ActivatedRoute ) {

    this.route.params.subscribe(
      params => this.articleID = params['id']
    );

    this.route.params.subscribe(
      params => this.articleTitle = params['title']
    );

    this.route.params.subscribe(
      params => this.articleImageUrl = params['imageUrl']
    );

    this.route.params.subscribe(
      params => this.articleText = params['text']
    );

    this.route.params.subscribe(
      params => this.articleComment = params['comments']
    );

  }

}

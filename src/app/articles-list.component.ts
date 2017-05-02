/**
 * Created by krisd3v on 28.4.2017 г..
 */
import { Component, OnInit } from '@angular/core';
import { ArticleService } from './articles.service';

@Component({
  selector:'article-list',
  templateUrl:'./articles-list.component.html',
  providers:[ArticleService]
})

export class ArticleListComponent implements OnInit{
  articles = [];

  constructor(private _articlesService: ArticleService){}

  ngOnInit(){
    this._articlesService.getArticles()
      .subscribe(resArticlesData => this.articles = resArticlesData );
  }


}

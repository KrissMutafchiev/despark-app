/**
 * Created by krisd3v on 28.4.2017 г..
 */
import { Component , OnInit } from '@angular/core';
import { ArticlesListService } from './articleList.service';

@Component({
  selector:'article-list',
  template:`<h1>TEST</h1>`

})

export class ArticleListComponent implements OnInit{
  articles = [];

  constructor(private _articlesService:ArticleListService){}
  ngOnInit(){
    this._articlesService.getArticles()
      .subscribe(resArticlesData => this.articles = resArticlesData );
  }

}

import { Component , OnInit } from '@angular/core';
import { Routes, Router} from '@angular/router';
import { ArticleService } from './articles.service';
import { ArticleDetail } from  './article-detail.component';



export const routes: Routes = [
  { path: 'article/:id', component: ArticleDetail}
];

export class Article {
  id: number;
  title: string;
  imageUrl: string;
  text: string;
  comments:any[];
}


@Component({
  selector: 'app',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css'],
  providers:[ArticleService]
})



export class AppComponent  implements OnInit {

  titleApp = 'app works!';
  selectedArticle: Article;

  articles:Article[];

  constructor(private _router: Router , private _articlesService:ArticleService){}

  ngOnInit(){
    this._articlesService.getArticles()
      .subscribe(resArticlesData => this.articles = resArticlesData );
  }



  onSelect(prod: Article): void {
    isClassVisible:false;
    this.selectedArticle = prod;
    this._router.navigate(["/article", prod.id]);

  }

}


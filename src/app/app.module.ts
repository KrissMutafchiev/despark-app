import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {ArticleService} from "./articles.service";
import {ArticleDetail} from "./article-detail.component";
import {routes} from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.router';



@NgModule({
  declarations: [AppComponent, ArticleDetail],
  imports: [ BrowserModule, routing,HttpModule, RouterModule.forRoot(routes) ],
  providers: [ArticleService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

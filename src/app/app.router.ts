import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetail } from './article-detail.component';

// Route Configuration
export const routes: Routes = [
  { path: 'article/:id', component: ArticleDetail}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './articles-details/components/article-details/article-details.component';

const routes: Routes = [
  { path: 'articles', loadChildren: () => import('./articles-details/articles-details.module').then(m => m.ArticlesDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

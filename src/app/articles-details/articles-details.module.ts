import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesDetailsRoutingModule } from './articles-details-routing.module';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';


@NgModule({
  declarations: [ArticleDetailsComponent],
  imports: [
    CommonModule,
    ArticlesDetailsRoutingModule
  ]
})
export class ArticlesDetailsModule { }

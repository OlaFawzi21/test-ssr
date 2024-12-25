import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleId!: string;
  articleTitle!: string;
  articleDescription!: string;
  articleImage!: string;
  constructor(
  private meta: Meta,
  private title: Title,
  private route: ActivatedRoute
) {}
  ngOnInit(): void {
    console.log('test');
    // Get the article ID from the route
    this.articleId = this.route.snapshot.params['id'];

    // Example: Simulate fetching article data
    this.articleTitle = 'Sample Article Title';
    this.articleDescription = 'This is a description of the sample article.';
    this.articleImage = 'https://i.ytimg.com/vi/RDkx4J__-QY/maxresdefault.jpg';

    // Update meta tags
    this.updateMetaTags();
  }
  updateMetaTags() {
    // Update the browser title
    this.title.setTitle(this.articleTitle);

    // Update Open Graph and meta tags
    this.meta.updateTag({ name: 'description', content: this.articleDescription });
    this.meta.updateTag({ property: 'og:title', content: this.articleTitle });
    this.meta.updateTag({ property: 'og:description', content: this.articleDescription });
    this.meta.updateTag({ property: 'og:image', content: this.articleImage });
    this.meta.updateTag({ property: 'og:url', content: `https://hps-journalistsportal-ane2b9b2d4fjgrd7.canadacentral-01.azurewebsites.net/article/${this.articleId}` });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}

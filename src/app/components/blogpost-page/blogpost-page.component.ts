import { Component } from '@angular/core';
import { BlogpostComponent } from '../blogpost/blogpost.component';
import { blogCard, BlogPostService } from '../../services/blogpost.service';

@Component({
  selector: 'app-blogpost-page',
  imports: [BlogpostComponent],
  templateUrl: './blogpost-page.component.html',
  styleUrl: './blogpost-page.component.css',
})
export class BlogpostPageComponent {
  post!: blogCard;

  constructor(private blogPostService: BlogPostService) {
    const currentPost = this.blogPostService.getCurrentPost();
    if (!currentPost) {
      throw new Error('Inget inlägg valt! Navigera tillbaka.');
    }
    this.post = currentPost;
  }
}

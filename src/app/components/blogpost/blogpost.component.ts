import { Component } from '@angular/core';
import { BlogPostService, blogCards } from '../../services/blogpost.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogpost',
  imports: [CommonModule],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css',
})
export class BlogpostComponent {
  blogPosts: blogCards[] = [];

  constructor(private blogpostservice: BlogPostService) {
    this.blogPosts = this.blogpostservice.blogPosts;
  }

  like(post: blogCards) {
    post.likes++;
  }

  unlike(post: blogCards) {
    post.likes--
  }
}

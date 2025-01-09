import { Component } from '@angular/core';
import { BlogPostService, blogCard } from '../../services/blogpost.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogpost',
  imports: [CommonModule],
  templateUrl: './blogpostList.component.html',
  styleUrl: './blogpostList.component.css',
})
export class BlogpostListComponent {
  blogPosts: blogCard[] = [];

  constructor(private blogpostservice: BlogPostService) {
    this.blogPosts = this.blogpostservice.blogPosts;
  }

  like(post: blogCard) {
    post.likes++;
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }

  unlike(post: blogCard) {
    post.likes--;
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }

  blogComment: string = '';

  sendComment(post: blogCard) {
    if (!this.blogComment) {
      alert('fyll i text i rutan');
    } else {
      this.blogComment;
    }
  }

  addComment(comments: string[]) {}
}

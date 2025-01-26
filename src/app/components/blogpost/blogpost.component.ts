import { Component, Input } from '@angular/core';
import { blogCard, BlogPostService } from '../../services/blogpost.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogpost',
  imports: [CommonModule, FormsModule],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css',
})
export class BlogpostComponent {
  @Input() post!: blogCard;
  blogComment: string = '';

  constructor(private blogPostService: BlogPostService) {}

  sendComment(post: blogCard) {
    if (!this.blogComment) {
      alert('fyll i text i rutan');
    } else {
      post.comments.unshift(this.blogComment);
      this.blogComment = '';
    }
    localStorage.setItem(
      'blogpost',
      JSON.stringify(this.blogPostService.blogPosts)
    );
  }

  like(post: blogCard) {
    this.blogPostService.like(post);
  }

  unlike(post: blogCard) {
    this.blogPostService.unlike(post);
  }
}

import { Component, input } from '@angular/core';
import { blogCard } from '../../services/blogpost.service';
import { Input } from '@angular/core';
import { BlogPostService } from '../../services/blogpost.service';
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

  sendComment(post: blogCard) {
    if (!this.blogComment) {
      alert('fyll i text i rutan');
    } else {
      post.comments.push(this.blogComment);
      this.blogComment = '';
    }
    localStorage.setItem('blogpost', JSON.stringify(this.blogPostService.blogPosts))
  }

  addComment(comments: string[]) {}

  like(post: blogCard) {
    this.blogPostService.like(post);
  }

  unlike(post: blogCard) {
    this.blogPostService.unlike(post);
  }
  constructor(private blogPostService: BlogPostService) {}
}

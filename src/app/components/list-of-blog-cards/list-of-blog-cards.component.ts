import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostService, blogCard } from '../../services/blogpost.service';

@Component({
  selector: 'app-list-of-blog-cards',
  imports: [CommonModule],
  templateUrl: './list-of-blog-cards.component.html',
  styleUrl: './list-of-blog-cards.component.css',
})
export class ListOfBlogCardsComponent {
  blogposts: blogCard[] = [];

  constructor(private BlogpostService: BlogPostService) {
    this.blogposts = this.BlogpostService.blogPosts;
  }
}

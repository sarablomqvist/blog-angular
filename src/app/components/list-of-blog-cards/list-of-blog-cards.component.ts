import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostService } from '../../services/blogpost.service';
import { blogCards } from '../../services/blogpost.service';

@Component({
  selector: 'app-list-of-blog-cards',
  imports: [CommonModule],
  templateUrl: './list-of-blog-cards.component.html',
  styleUrl: './list-of-blog-cards.component.css',
})
export class ListOfBlogCardsComponent {
  blogposts: blogCards[] = [];

  constructor(private BlogpostService: BlogpostService) {
    this.blogposts = this.BlogpostService.blogPost;
  }
}

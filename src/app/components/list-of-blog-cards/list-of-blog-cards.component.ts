import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostService, blogCard } from '../../services/blogpost.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-of-blog-cards',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-of-blog-cards.component.html',
  styleUrl: './list-of-blog-cards.component.css',
})
export class ListOfBlogCardsComponent {
  blogposts: blogCard[] = [];

  constructor(
    private BlogpostService: BlogPostService,
    private router: Router
  ) {
    this.blogposts = this.BlogpostService.blogPosts;
  }

  navigateToPost(post: blogCard) {
    this.BlogpostService.setCurrentPost(post);
    this.router.navigate(['blogpost']);
  }
}

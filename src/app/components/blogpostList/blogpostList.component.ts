import { Component } from '@angular/core';
import { BlogPostService, blogCard } from '../../services/blogpost.service';
import { CommonModule } from '@angular/common';
import { BlogpostComponent } from '../blogpost/blogpost.component';

@Component({
  selector: 'app-blogpostlist',
  imports: [CommonModule, BlogpostComponent],
  templateUrl: './blogpostList.component.html',
  styleUrl: './blogpostList.component.css',
})
export class BlogpostListComponent {
  blogPosts: blogCard[] = [];

  constructor(private blogpostservice: BlogPostService) {
    this.blogPosts = this.blogpostservice.blogPosts;
  }
}

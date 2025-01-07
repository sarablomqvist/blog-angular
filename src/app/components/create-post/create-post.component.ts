import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BlogPostService, blogCards } from '../../services/blogpost.service';

@Component({
  selector: 'app-create-post',
  imports: [FooterComponent, FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  blogTitle: string = '';
  blogContent: string = '';
  blogDate: string = '';

  constructor(public blogpostservice: BlogPostService) {}

  publishPost() {
    if (!this.blogTitle || !this.blogContent || !this.blogDate) {
      alert('Fyll i alla fält!');
      return;
    }

    const newPost: blogCards = {
      title: this.blogTitle,
      body: this.blogContent,
      creationDate: this.blogDate,
      comments: [''],
      id: 9,
      thumbnailUrl: '',
      likes: 10,
      dislikes: 10,
    };

    this.blogpostservice.addBlogPost(newPost);

    this.blogTitle = '';
    this.blogContent = '';
    this.blogDate = '';
  }
}

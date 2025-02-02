import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BlogPostService, blogCard } from '../../services/blogpost.service';

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
  blogImg: string = '';
  blogComment: string[] = [''];

  constructor(public blogpostservice: BlogPostService) {}

  publishPost() {
    if (
      !this.blogTitle ||
      !this.blogContent ||
      !this.blogDate ||
      !this.blogImg
    ) {
      alert('Fyll i alla fält!');
      return;
    }

    const newPost: blogCard = {
      id: this.blogpostservice.generateId(),
      title: this.blogTitle,
      body: this.blogContent,
      thumbnailUrl: this.blogImg,
      creationDate: this.blogDate,
      likes: 0,
      dislikes: 0,
      comments: this.blogComment,
    };

    this.blogpostservice.addBlogPost(newPost);

    this.blogTitle = '';
    this.blogContent = '';
    this.blogDate = '';
    this.blogImg = '';
  }
}

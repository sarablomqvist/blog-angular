import { Injectable } from '@angular/core';

export interface blogCards {
  id: number;
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: string;
  likes: number;
  dislikes: number;
  comments: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  public blogPosts: blogCards[] = [];
  public currentId: number = 0;

  constructor() {
    const savedPosts = localStorage.getItem('blogpost');
    if (savedPosts) {
      this.blogPosts = JSON.parse(savedPosts);
    }
  }

  addBlogPost(post: blogCards) {
    console.log(this.blogPosts);
    this.blogPosts.push(post);
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }

  generateId(): number {
    return this.currentId++
  }
}

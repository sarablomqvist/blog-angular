import { Injectable } from '@angular/core';

export interface blogCard {
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
  public blogPosts: blogCard[] = [];
  public currentId: number = 0;

  constructor() {
    const savedPosts = localStorage.getItem('blogpost');
    if (savedPosts) {
      this.blogPosts = JSON.parse(savedPosts);
    }
  }

  addBlogPost(post: blogCard) {
    this.blogPosts.unshift(post);
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }

  generateId(): number {
    return this.currentId++;
  }
}

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
  public currentPost?: blogCard;

  constructor() {
    const savedPosts = localStorage.getItem('blogpost');
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        this.blogPosts = Array.isArray(parsedPosts) ? parsedPosts : [];
      } catch (error) {
        console.error('Fel vid laddning av sparade inlägg:', error);
        this.blogPosts = [];
      }
    } else {
      this.blogPosts = [];
    }
  }

  setCurrentPost(post: blogCard) {
    this.currentPost = post;;
  }

  getCurrentPost(): blogCard | undefined {
    return this.currentPost;
  }

  addBlogPost(post: blogCard) {
    this.blogPosts.unshift(post);
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }

  generateId(): number {
    return this.blogPosts.length + 1;
  }

  like(post: blogCard) {
    post.likes++;
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }

  unlike(post: blogCard) {
    post.likes--;
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }
}

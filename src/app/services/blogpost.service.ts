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

//   constructor() {
//     const savedPosts = localStorage.getItem('blogpost');
//     if (savedPosts) {
//       this.blogPosts = JSON.parse(savedPosts);
//     }
//   }

constructor() {
    const savedPosts = localStorage.getItem('blogpost');
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        // Säkerställ att parsedPosts är en array
        this.blogPosts = Array.isArray(parsedPosts) ? parsedPosts : [];
      } catch (error) {
        console.error('Fel vid laddning av sparade inlägg:', error);
        this.blogPosts = []; // Om det inte är en giltig array, sätt till tom array
      }
    } else {
      this.blogPosts = []; // Om inget sparat finns, initiera som en tom array
    }
  }

  addBlogPost(post: blogCard) {
    this.blogPosts.unshift(post);
    localStorage.setItem('blogpost', JSON.stringify(this.blogPosts));
  }

  generateId(): number {
    return this.currentId++;
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

import { Injectable } from '@angular/core';

export interface blogCards {
  id: number;
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  public blogPost: blogCards[] = [
    {
      id: 1,
      title: 'Hej rubrik',
      thumbnailUrl:
        'https://indoorwood.se/cdn/shop/articles/Hemmakontor.webp?v=1706812081&width=1100',
      body: 'Hejsan hoppsan bloggen',
      creationDate: new Date('2025-01-03'),
      likes: 100,
      dislikes: 10,
      comments: ['Wooow!!', 'Awesome post!', 'Noo, dont like this.'],
    },
  ];
  constructor() {}
}

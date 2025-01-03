import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-blog-cards',
  imports: [],
  templateUrl: './list-of-blog-cards.component.html',
  styleUrl: './list-of-blog-cards.component.css',
})
export class ListOfBlogCardsComponent {
  blogTitle = 'Feng Shui';

  constructor(private router: Router) {}

  goToBlogPost() {
    this.router.navigate(['/blogpost']);
  }


}

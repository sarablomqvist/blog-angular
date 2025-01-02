import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  blogTitle = 'Feng Shui';

  constructor(private router: Router) {}

  goToBlogPost() {
    this.router.navigate(['/blogpost']);
  }
}

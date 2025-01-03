import { Component } from '@angular/core';
import { ListOfBlogCardsComponent } from '../list-of-blog-cards/list-of-blog-cards.component';

@Component({
  selector: 'app-allblogpost',
  imports: [ListOfBlogCardsComponent],
  templateUrl: './allblogpost.component.html',
  styleUrl: './allblogpost.component.css',
})
export class AllblogpostComponent {}

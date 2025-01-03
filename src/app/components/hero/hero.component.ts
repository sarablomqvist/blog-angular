import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { AllblogpostComponent } from '../allblogpost/allblogpost.component';
import { ListOfBlogCardsComponent } from '../list-of-blog-cards/list-of-blog-cards.component';

@Component({
  selector: 'app-hero',
  imports: [AboutMeComponent, AllblogpostComponent, ListOfBlogCardsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}

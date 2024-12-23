import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { AllblogpostComponent } from "../allblogpost/allblogpost.component";
import { BlogCardComponent } from "../blog-card/blog-card.component";

@Component({
  selector: 'app-hero',
  imports: [AboutMeComponent, AllblogpostComponent, BlogCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}

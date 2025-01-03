import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AllblogpostComponent } from './components/allblogpost/allblogpost.component';
import { ListOfBlogCardsComponent } from './components/list-of-blog-cards/list-of-blog-cards.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeaderNavComponent,
    HeroComponent,
    AllblogpostComponent,
    ListOfBlogCardsComponent,
    BlogpostComponent,
    AboutMeComponent,
    FooterComponent,
    CreatePostComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';
}

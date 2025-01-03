import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AllblogpostComponent } from './components/allblogpost/allblogpost.component';
import { HeroComponent } from './components/hero/hero.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'createpost', component: CreatePostComponent },
  { path: 'blogpost', component: BlogpostComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'allblogpost', component: AllblogpostComponent}
];

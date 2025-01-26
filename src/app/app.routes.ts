import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AllblogpostComponent } from './components/allblogpost/allblogpost.component';
import { HeroComponent } from './components/hero/hero.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { BlogpostListComponent } from './components/blogpostList/blogpostList.component';
import { BlogpostPageComponent } from './components/blogpost-page/blogpost-page.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'createpost', component: CreatePostComponent },
  { path: 'blogpostlist', component: BlogpostListComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'allblogpost', component: AllblogpostComponent },
  { path: 'blogpost', component: BlogpostPageComponent },
];

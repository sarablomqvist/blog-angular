import { Component } from '@angular/core';
import { AllblogpostComponent } from '../allblogpost/allblogpost.component';

@Component({
  selector: 'app-hero',
  imports: [AllblogpostComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}

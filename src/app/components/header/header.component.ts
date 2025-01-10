import { Component } from '@angular/core';
import { HeaderNavComponent } from "../header-nav/header-nav.component";

@Component({
  selector: 'app-header',
  imports: [HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    isOwner: boolean = false;

    toggleUserOwner(){
        this.isOwner = !this.isOwner;
    }
}

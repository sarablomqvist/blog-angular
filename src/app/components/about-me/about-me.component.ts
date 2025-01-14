import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  imports: [FormsModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  name: string = '';
  phonenr: string = '';
  mail: string = '';
  message: string = '';

  sendForm() {
    if (!this.name || !this.phonenr || !this.mail || !this.message) {
      alert('Fyll i alla fält tack');
    } else if (this.name || this.phonenr || this.mail || this.message) {
      alert('Tack för att du kontaktade mig!');
    }
    this.name = '';
    this.phonenr = '';
    this.mail = '';
    this.message = '';
  }
}

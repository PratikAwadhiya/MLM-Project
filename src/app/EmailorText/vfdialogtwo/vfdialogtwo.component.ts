import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { faXTwitter,faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';

import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vfdialogtwo',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule,FaIconComponent],
  templateUrl: './vfdialogtwo.component.html',
  styleUrl: './vfdialogtwo.component.css'
})
export class VfdialogtwoComponent {
  faXmark = faXmark;
  faXTwitter = faXTwitter;
  faGoogle =faGoogle;
  faFacebook =faFacebook
}

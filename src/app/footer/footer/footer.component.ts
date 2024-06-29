import { Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn,faInstagram,faXTwitter,faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  faXTwitter = faXTwitter;
  faWhatsapp = faWhatsapp;

  constructor() { }
  ngOnInit(): void {
      
  }
  
}

import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../navbar/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productpage1',
  standalone: true,
  imports: [FooterComponent,CommonModule,RouterLink,NavigationComponent],
  templateUrl: './productpage1.component.html',
  styleUrl: './productpage1.component.css'
})
export class Productpage1Component implements OnInit{
  
 
 

  constructor(){}

  ngOnInit(): void {
    
  }
}
